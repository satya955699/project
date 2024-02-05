// // const hour=document.querySelector(".hour");
// // const min=document.querySelector(".min");
// // const sec=document.querySelector(".sec");


// // setInterval(()=>{
// //      const dt= new Date()
// //     hour.innerHTML=dt.getHours();
// //     min.innerHTML=dt.getMinutes();
// //     sec.innerHTML=dt.getSeconds();
    
// // },1000)
// const hour=document.querySelector(".hour")
// const min =document.querySelector(".min")
// const sec =document.querySelector(".sec")
// // setInterval(()=>{
// //     const dt=new Date()
// //     hour.innerHTML=dt.getHours();
// //     min.innerHTML=dt.getMinutes();
// //     sec.innerHTML=dt.getSeconds()

// // },1000)
// setInterval(()=>{
//     const dt=new Date();
//     hour.innerHTML
    
// })
let hour=document.querySelector(".hour")
let min=document.querySelector(".min")
let second=document.querySelector(".sec")
setInterval(()=>{
    let date=new Date()
    hour.innerHTML=date.getHours()
    min.innerHTML=date.getMinutes()
    second.innerHTML=date.getSeconds()
},1000)




