console.log("welcome to my website")
let side=document.querySelector("main")
// side.style.display="none"
// document.querySelector(".sidemain").style.display="none"
let iot=document.querySelector("#iot")
iot.addEventListener("click",()=>{
    console.log("ehel")
    document.querySelector(".main").classList.toggle("maingo")
    if(document.querySelector(".main").classList.contains("maingo")){
        document.querySelector("#iot").classList.add("fa-bars")
        document.querySelector("#iot").classList.remove("fa-xmark")
        console.log("helo")
    }
    else{
        document.querySelector("#iot").classList.remove("fa-bars")
        document.querySelector("#iot").classList.add("fa-xmark")
        console.log("by")
    }
    // alert("ehleo")
    // document.querySelector(".sidemain").classList.add("main")
})
