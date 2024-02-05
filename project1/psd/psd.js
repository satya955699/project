const UPPERCASE ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz"
const SYMBOL = "!@#$%^&*()_+"
const NUMBER="1234567890"
const getRandomData=(data)=>{
     return data[Math.floor(Math.random() * data.length)] 
     // console.log(data.length)


}
// getRandomData(UPPERCASE)                                              
console.log(getRandomData(UPPERCASE))
 var passbox=document.getElementById("passbox")
 passbox.value="ram";

 const totalchar=document.getElementById("totalchar")
const upperinput=document.getElementById("uppercase")
const lowerinput=document.getElementById("lowercase")
const numberinput=document.getElementById("number")
const symbolinput=document.getElementById("symbol")
const button=document.querySelector("button")

const generatepassword=(passowrd ="")=>{          
     if(upperinput.checked){
          passowrd+=getRandomData(UPPERCASE)
     }
     if(lowerinput.checked){
          passowrd+=getRandomData(LOWERCASE)
     }
     if(numberinput.checked){
          passowrd+=getRandomData(NUMBER)
     }
     if(symbolinput.checked){
          // console.log("helo")
          passowrd+=getRandomData(SYMBOL)
     }
     if(passowrd.length< totalchar.value){
          return generatepassword(passowrd)
     }
     console.log(passowrd)
     passbox.value=passowrd;
}
button.addEventListener("click",(e)=>{
     generatepassword()  
})



