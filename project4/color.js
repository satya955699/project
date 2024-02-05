console.log("welcome to my color picker")
var body=document.querySelector("body")
var button=document.querySelector("button")
var span=document.querySelector("span")
button.addEventListener("click",()=>{
    // body.style.color=blue; 
    // span.innerHTML="helo"
   let random=Math.floor(Math.random()*16777215)
   console.log(random)
   let clr="#"+ random.toString(16)
   body.style.backgroundColor=clr;
   console.log(clr)
   console.log("helo")
   span.innerHTML=clr;

})