let info = [
    { 
        id:1,
        title:"salom",
        desc:"hello",
        complted:false,
    }
]

let right = document.querySelector('.right')

let btnImg = document.querySelector(".btnImg")
let modal = document.querySelector(".modal")
let span = document.getElementsByClassName("close")[0];
let btnSave = document.querySelector(".save")
let inputModal = document.querySelector("#inputModal")
let closee = document.querySelector(".closee")
let checkbox = document.querySelector(".checkbox")
let h3class = document.querySelector('.h3class')

let inpTitle = document.querySelector(".inpTitle1")
let inpDesc2 = document.querySelector(".inpDesc2")
let inpTitle2 = document.querySelector(".inpTitle2")
let inpDesc22 = document.querySelector(".inpDesc22")

let chckboxDelete = document.querySelector('.chckboxDelete')

let inputModal2 = document.querySelector("#inputModal2")
let modal2 = document.querySelector("#myModal2")
let save2 = document.querySelector(".save2")
closee.style.cursor = "pointer"


// console.log(emptyarr);


function addFunction(){
    // console.log(textarea.value);
        let arr ={
            id:new Date().getTime(),
            title:inpTitle.value,
            desc:inpDesc2.value,
            complted:false,

        }
   
        info.push(arr);
        inpTitle.value = ""
        inpDesc2.value = ""
        get(info)
}
btnSave.onclick=()=>{
    addFunction()
    modal.style.display = "none"
   
}


let emptyarr = []

// modal js

   btnImg.onclick=()=>{
    modal.style.display = "block";
}
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
span.onclick = function() {
modal.style.display = "none";
}
closee.onclick = function() {
    modal.style.display = "none";
    }

btnSave.disabled = true
btnSave.style.cursor = "not-allowed"

inputModal.addEventListener("input", ()=>{
    if(inputModal.value !== ""){
        btnSave.disabled = false
        btnSave.style.cursor = "pointer"
    }
    else{
        btnSave.disabled = true
        btnSave.style.cursor = "not-allowed"

    }
})   

function compliterTask(id){
info=info.map((e)=>{
    if(e.id ==id){
        e.complted = !e.complted
    }
    return e
})
console.log(info);
get(info)
}

let idx=null
function editOpenModal(id){
    modal2.style.display="block"
   let user=info.find((e)=>e.id==id)
   idx=id
   inpTitle2.value=user.title
      inpDesc22.value=user.desc
}

function editTodo(){
    info=info.map((e)=>{
        if(e.id==idx){
            e.title=inpTitle2.value
            e.desc=inpDesc22.value
        }
        return e
    })
    get(info)
    modal2.style.display="none"
}
save2.onclick=editTodo
function deleteee(id) {
   
    info = info.filter((el)=>el.id!==id)
    get(info)
 }
 //   emptyarr.push(el.id)
 
 chckboxDelete.onclick=(event)=>{
    let clone=[...info]
    if(event.target.checked){
        clone=clone.filter((e)=>e.complted!=true)
        get(clone)
    }
    else{
        get(info)
    }
 }


 function get(newInfo) {
     right.innerHTML=''
     newInfo.forEach((el)=>{
        let cardd = document.createElement("div")
        cardd.classList.add("card")
        let h3 = document.createElement("h3")
        h3.classList.add("h3class")
        if(el.complted==true){
            h3.style.color="red"
        }
        h3.innerHTML = el.title
        let p = document.createElement("p")
        p.innerHTML = el.desc;  
        let icon = document.createElement("i")
        icon.className = 'fa-solid fa-pen';
        icon.classList.add("iconstyle")
        icon.id = "edit"
        icon.onclick=()=>{
            console.log("sd");
            editOpenModal(el.id)
        }

    
        

        let trush =  document.createElement("i")
        trush.className = "fa-solid fa-trash";
        trush.classList.add("trussh")
        trush.style.cursor = "pointer"
        
        
        let chbox = document.createElement("input")
        chbox.type = 'checkbox';
        chbox.id = "checkboxId"
        chbox.classList.add("checkbox")
        chbox.checked=el.complted
        
chbox.onclick=()=> {
    compliterTask(el.id)
     // if (h3.style.textDecoration === 'line-through') {
     //   h3.style.textDecoration = 'none';
     
       
     // } else {
     //   h3.style.textDecoration = 'line-through';
     //   console.log(el.id);
     // }
     
  };    

        let span = document.createElement("span")
        span.textContent = "Done"
        span.classList.add("done")
        span.id = "checkboxId"
        
        
        
        // console.log(emptyarr);
        cardd.appendChild(h3);
        cardd.appendChild(p);
        cardd.appendChild(icon)
        cardd.appendChild(trush)
        cardd.appendChild(chbox)
        cardd.appendChild(span)
        right.appendChild(cardd)
        
      
        trush.onclick=()=>{
            deleteee(el.id)
        }
        
        
        
     })
}
get(info)


