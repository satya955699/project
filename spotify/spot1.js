console.log("helo");
let audioElement=new Audio('1.mp3.mp3')
let progressbar=document.querySelector("#progressbar")
var play=document.querySelector(".fa-play")
var forward=document.querySelector(".fa-forward")
var backward=document.querySelector(".fa-backward")
let songitem=Array.from(document.querySelectorAll(".songone"))
let album=Array.from(document.querySelectorAll(".album"))
let addon=Array.from(document.querySelectorAll(".addon"))
songlist=[
    {songname:"O MAHI",filepath:"1.mp3.mp3",coverpath:"1.jpg",album:"dunki",dateadd:"Dec27,2023"},
    {songname:"HEERIYE",filepath:"2.mp3.mp3",coverpath:"2.jpg",album:"na",dateadd:"jan23,2023"},
    {songname:"MAAN MARI JAAN",filepath:"3.mp3.mp3",coverpath:"3.jpg",album:"maan mari jaan",dateadd:"feb3,2023"},
    {songname:"TERE HAWALE",filepath:"4.mp3.mp3",coverpath:"4.jpg",album:"laal singh chadha",dateadd:"Dec8,2023"},
    {songname:"CHALEYA",filepath:"5.mp3.mp3",coverpath:"5.jpg",album:"chaleya",dateadd:"june2,2023"},

]
songitem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songlist[i].coverpath;
    element.getElementsByTagName("h1")[0].textContent=songlist[i].songname;
    element.addEventListener('click',(e)=>{
        console.log(e.target.id);
        let id=parseInt(e.target.id)
        audioElement.src=`${id}.mp3.mp3`
        audioElement.play()
        addplay()
        audioElement.currentTime=0;


    })
})
album.forEach((element,i)=>{
    element.textContent=songlist[i].album;
})
addon.forEach((element,i)=>{
    element.textContent=songlist[i].dateadd;
})
function addplay(){
play.classList.remove("fa-play")
play.classList.add("fa-pause")
}
function addpause(){
    play.classList.remove("fa-pause")
    play.classList.add("fa-play")
    }
// for play
play.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play()
        addplay()
        console.log("plays")
        playlist.classList.add("fa-circle-pause")
        playlist.classList.remove("fa-circle-play")
    }
    else{
        audioElement.pause()
       addpause() 
       console.log("pause")
       playlist.classList.add("fa-circle-play")
       playlist.classList.remove("fa-circle-pause")
    }
})
// forward 
var length=songlist.length;
var index=0;
forward.addEventListener("click",()=>{
    if(index>=length){
        index=0
    }
    else{
        index=index+1;
    }
    audioElement.src=`${index}.mp3.mp3`
    audioElement.currentTime=0;
    audioElement.play()
    addplay()


})
backward.addEventListener("click",()=>{
    if(index<0){
        index=length
    }
    else{
        index=index-1;
    }
    audioElement.src=`${index}.mp3.mp3`
    audioElement.currentTime=0;
    audioElement.play()
    addplay()
})
audioElement.addEventListener("timeupdate",()=>{
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    progressbar.value=progress;
document.querySelector(".input span").textContent=parseInt(audioElement.currentTime);
})
progressbar.addEventListener("change",()=>{
    audioElement.currentTime=progressbar.value * audioElement.duration/100;

})
let playlist=document.querySelector(".fa-circle-play")
playlist.addEventListener('click',()=>{
   if(playlist.classList.contains("fa-circle-play")){
    playlist.classList.remove("fa-circle-play")
    playlist.classList.add("fa-circle-pause")
    audioElement.play()
    addplay()
   }
   else{
    playlist.classList.add("fa-circle-play")
    playlist.classList.remove("fa-circle-pause")
    audioElement.pause()
    addpause()
   }
})



