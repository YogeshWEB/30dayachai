function task1(){
    document.getElementById("para").innerText = "lorem text changed to Hello World"
}
let toggel1 = true;
function task2(){
    if(toggel1===true){
    document.getElementById("image").style.visibility = "hidden"
    toggel1 =!toggel1
    }else{
        document.getElementById("image").style.visibility = "visible"
        toggel1 = !toggel1
    }
}
function task3(){
    document.getElementById("task3").style.background = "red"
}
function task4(){
    document.getElementById("task3").style.background = ""
}
function task5(event){
    let str = "You pressed : ";
    str = str + String.fromCharCode(event.keyCode);
    console.log(str,event.keyCode);
}
let str = "";
function task6(event){
    
    str = str + String.fromCharCode(event.keyCode);
    console.log(str);
}
let data =  document.getElementById("form");
data.addEventListener("submit",(e)=>{

    e.preventDefault();
    
    
    console.log(data.elements.task7.value);    
})
    
let brand = document.getElementById("brand")   ;
let dropdown = document.getElementById("dropdown");
dropdown.addEventListener("change",()=>{
    brand.innerText = brand.innerText +" " + dropdown.value
}) 
let ul = document.getElementById("ul");
ul.addEventListener("click",(e)=>{
    // console.log(e.target);
    if(e.target.tagName==="LI"){
        console.log(e.target.innerText);
    }
})
let ul2 =document.getElementById("ul2");
let count = 1;
ul2.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        addelement()
    }
})
function addelement(){
    count++;
    let child =document.createElement("li");
    let text = document.createTextNode(`list:${count}`)
    child.appendChild(text);
    ul2.appendChild(child)
}
// console.log(data.value);