console.log("welcome to my home")
let content=Array.from(document.querySelectorAll(".content"))
let main=document.querySelector(".main")
let playlist=document.querySelector(".threeplaylist")
let remove=document.querySelector(".remove")
songlist=[
    {filepat:"1.jpg", heading:"HANGOVERCURE",text:"Trust us no need this"},
    {filepat:"2.jpg", heading:"ALL OUT 00 SONGS",text:"Trust us no need this"},
    {filepat:"3.jpg", heading:"PUNJABI",text:"Catch the hottest punjabi track"},
    {filepat:"4.jpg", heading:"DESI HITS",text:"best of india"},
    {filepat:"5.jpg", heading:"SANAM PURI",text:"Let  move to 90s"},
    {filepat:"1.jpg", heading:"I-PUP SUPERHIT",text:"Bigest hits from your favorite"},
    {filepat:"1.jpg", heading:"HANGOVERCURE",text:"Trust us no need this"}
]
content.forEach((e,i)=>{
    e.getElementsByTagName("img")[0].src=songlist[i].filepat
    e.getElementsByTagName("h2")[0].textContent=songlist[i].heading
})
let index=1
var addnote=()=>{
    var container=document.createElement("div")
    container.classList.add("titlecol");
    container.innerHTML=`
    <div class="colone">
        <div class="img"><a href=""><img src="${index}.jpg" alt="youtube.com"></a>
        </div>
        <div class="text">
            <h1> <a href="">#playlist${index}</a></h1>
            <!-- <br> -->
            <span>plalist . satya</span>
        </div>
    </div>
    <div class="trase"><i class="  fa-solid fa-xmark "></i></div>
    <div class="playd">played</div>
    `
    main.append(container)
    if(index>=5){
        index=1
    }
    else{
        index=index+1;
    }
    remove.addEventListener("click",()=>{
        container.remove()
    })
    container.querySelector(".trase").addEventListener("click",()=>{
        container.remove()
    })
}
playlist.addEventListener("click",()=>{
    addnote()
})

