console.log("welcome to spotify")
let audioElement=new Audio('1.mp3')
let masterplay=document.getElementById("masterplay")
let progressbar=document.getElementById("progressbar")
let gif=document.getElementById("gf")
let backword=document.getElementById("backward")
let forward=document.getElementById("forward")
var head=document.getElementsByClassName("heading")
let songItems=Array.from(document.getElementsByClassName("songItem"))
var a=0;
let index=0;
masterplay.addEventListener('click',()=>{
   if(audioElement.paused||audioElement.currentTime<=0){
    console.log("play")
    audioElement.play()
    masterplay.classList.remove("fa-circle-play")
    masterplay.classList.add("fa-circle-pause")
    play()

   }
else{
    audioElement.pause()
    masterplay.classList.remove("fa-circle-pause")
    masterplay.classList.add("fa-circle-play")
    pause()
    console.log("pause")
   }
})




var songList=[
    {songName:"sanam teri kasam",filePath:"1.mp3",coverPath:"1.jpg"},
    {songName:"one night stand",filePath:"2.mp3",coverPath:"2.jpg"},
    {songName:"sanm re",filePath:"3.mp3",coverPath:"3.jpg"},
    {songName:"selfali",filePath:"4.mp3",coverPath:"4.jpg"},
    {songName:"salame-ishq",filePath:"5.mp3",coverPath:"5.jpg"},
    {songName:"teri-meri-kahni",filePath:"6.mp3",coverPath:"6.jpg"},
    {songName:"tu-mera-ban",filePath:"7.mp3",coverPath:"7.jpg"},
    {songName:"ganesh-bandana ",filePath:"8.mp3",coverPath:"8.jpg"},
    {songName:"Lo-safer-suru-hogya",filePath:"9.mp3",coverPath:"9.jpg"},
    {songName:"kun-faya-kun",filePath:"10.mp3",coverPath:"10.jpg"}
    
]

songItems.forEach((element,i)=>{
   element.getElementsByTagName("img")[0].src=songList[i].coverPath;
   element.getElementsByClassName("songName")[0].textContent=songList[i].songName;

// console.log(element.getElementsByTagName("img")[0].src)
})
 masterplay.addEventListener('click',()=>{
    console.log("song play")
    if((audioElement.paused || audioElement.currentTime<=0)){
        console.log("play")
        audioElement.play()
        masterplay.classList.remove("fa-circle-play")
        masterplay.classList.add("fa-circle-pause")
       gif.style.opacity=1;
        a=1;
    }
    else{

        audioElement.pause()
        console.log("pause")
        masterplay.classList.remove("fa-circle-pause")
        masterplay.classList.add("fa-circle-play")
        gif.style.opacity=0;
        a=0;
    }
 })
 audioElement.addEventListener("timeupdate",()=>{
     var progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value = progress;
 })
 progressbar.addEventListener("change", ()=>{
    audioElement.currentTime=progressbar.value * audioElement.duration/100;
 })
 function multifunction(){
    Array.from(document.getElementsByClassName("songitemsplay")).forEach((element)=>{
        element.classList.add("fa-circle-play")
        element.classList.remove("fa-circle-pause")
        console.log("helo")
    })
 }
Array.from(document.getElementsByClassName("songitemsplay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
      multifunction();
      index=parseInt(e.target.id)
        console.log(e.target)
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src=`${index}.mp3`
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove("fa-circle-play")
        masterplay.classList.add("fa-circle-pause")
        console.log(head.innerHtml)
        gif.style.opacity=1;
    })
})
forward.addEventListener("click",(e)=>{
    
   if(index>9){
    index=0;
   }
   else{
    index+=1;
   }
//    e.target.classList.remove("fa-circle-play");
//         e.target.classList.add("fa-circle-pause");
        audioElement.src=`${index}.mp3`
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove("fa-circle-play")
        masterplay.classList.add("fa-circle-pause")
        gif.style.opacity=1;

})
backword.addEventListener("click",(e)=>{
    
    if(index<=0){
     index=9;
    }
    else{
     index-=1;
    }
    // e.target.classList.remove("fa-circle-play");
    //      e.target.classList.add("fa-circle-pause");
         audioElement.src=`${index}.mp3`
         audioElement.currentTime=0;
         audioElement.play();
         masterplay.classList.remove("fa-circle-play")
         masterplay.classList.add("fa-circle-pause")
         gif.style.opacity=1;
 
 })




