const qustion=[
    {
        qustion:"which one your is a mark up language",
        a:"css",
        b:"html",
        c:"java",
        d:"java script",
        correct:"d"
        
    },
    {
        qustion:"which one  is your favorite language",
        a:"java",
        b:"ruby",
        c:"python",
        d:"java script",
        correct:"c"

    },
    {
        qustion:"which language is used for webdevlopment",
        a:"java script",
        b:"c++",
        c:"c",
        d:"photoshop",
        correct:"a"
    }
]
// console.log(qustion[1].b)

let index=2
let inpt=document.querySelectorAll(".option")
let heading=document.querySelector("h1");
var data=qustion[index];
let loadQustion=()=>{
    console.log(data)
    heading.innerHTML=`${index+1})${data.qustion}`

    inpt[0].nextElementSibling.innerHTML=data.a;
    inpt[1].nextElementSibling.innerHTML=data.b;
    inpt[2].nextElementSibling.innerHTML=data.c;
    inpt[3].nextElementSibling.innerHTML=data.d
    
}
loadQustion()

console.log(data)
let submitQuiz=()=>{
    getAnswer()
    var data=qustion[index];
    const ans = getAnswer();
    console.log(getAnswer)
    // console.log(ans)

    console.log(data.correct)
    console.log(ans)
    if(ans===data.correct){
        console.log()
        console.log("yes")
    }
    else{
        
        console.log("no")
    }


}
const getAnswer=()=>{
   inpt.forEach((element)=>{
    // console.log(element)
    if(element.checked){
       return "name";
    }
    else{
        return "helo";
    }
   })

}