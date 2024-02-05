console.log("welcome to my calcultor")
let string="";
let btn=document.querySelectorAll("button")
btn.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        console.log(e.target.innerHTML)
        
       if(e.target.innerHTML=="="){
        // string=string+e.target.innerHTML;
        let cal=eval(string)
        console.log(cal)
        document.querySelector("input").value=cal


       }
     else if(e.target.innerHTML=="C"){
        console.log("helo")
        document.querySelector("input").value="0"
        string=""

     }
     else {
        string=string+e.target.innerHTML;
        console.log(string);
        document.querySelector("input").value=string
       }
        
    })
})