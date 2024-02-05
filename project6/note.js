// const addbtn=document.getElementById("addbtn")
// const main=document.querySelector("main")
// addbtn.addEventListener("click",()=>{
//     noteadd()
// })
// const textarea=document.querySelectorAll("textarea")
// const noteadd=(word="")=>{
//     console.log("helo")
//     const container=document.createElement("div")
//     container.classList.add("container")
//     container.innerHTML =`<div class="note">

//     <div class="tool">
//         <i class=" save fa-solid fa-floppy-disk"></i>
//         <i class=" trase fa-sharp fa-solid fa-trash"></i>
//     </div>
//     <div class="text">
//         <textarea cols="65" rows="30">${word}</textarea>
//     </div>
// </div>`;
// container.querySelector(".trase").addEventListener("click",()=>{
//     container.remove()
//     rmv()

// })


// main.appendChild(container)
// container.querySelector(".save").addEventListener("click",()=>{
//     savenote()
// })
// }
// const savenote=()=>{
//     const notes=document.querySelectorAll(".note textarea");
//     const data=[];
//     notes.forEach((note)=>{
//         // console.log(note.value)
//         data.push(note.value)
//         // console.log(data)
//         localStorage.setItem("notes",JSON.stringify(data))
//     })
//     var rmv=()=>{
//         notes.remove("notes")

//     }
//     console.log(data)
// }

// (
//     function(){
//         // console.log("harry")
//         const lsnote=JSON.parse(localStorage.getItem("notes"))
//         console.log(lsnote)
//         lsnote.forEach((e)=>{
//             noteadd(lsnote)

//         })
//         // console.log(lsnoste)

//     }
// )
// ()


console.log("welcome to my  note app")
const contain=document.querySelector("main")
const button=document.querySelector("button")
const savenote=()=>{
    const note=Array.from(document.querySelectorAll(".text textarea"))
    const data=[];
    // console.log(note)
    // console.log(data)

    // console.log("helo")
    note.forEach((e)=>{
        data.push(e.value)
        
        
        
        localStorage.setItem("notes",JSON.stringify(data))
    })
    console.log(data)


    


}
const call=()=>{
    const get=JSON.parse(localStorage.getItem("notes"))
    get.forEach(()=>{
        addnote
    })
}
call()
button.addEventListener("click",()=>{
    addnote()
})

var addnote=()=>{
    const container=document.createElement("div")
    container.classList.add("container");
    container.innerHTML=`
    <div class="notes">
    <div class="icon2">
        <i class="save fa-solid fa-floppy-disk"></i>
        <i id="trase" class="  fa-solid fa-trash"></i>
    </div>
    <div class="text">
    <textarea cols="33" rows="10">


</textarea>
</div>
</div>`;
container.querySelector("#trase").addEventListener("click",()=>{
    container.remove()
    savenote()
})
contain.appendChild(container);
container.querySelector(".save").addEventListener("click",()=>{
    savenote()
    
})
}

// savenote()
