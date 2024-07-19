function task1(){
    let obj = {
        title:"concept of physics",
        author:"H.C. Verma",
        year:1992
    }
    console.log(obj);
    task2(obj)
    task3(obj)
    
    task4(obj,2000)
    task7(obj)
    task8(obj)
    task9(obj)
}
task1()
function task2(obj){
    console.log(`title:${obj.title} author:${obj.author}`)
}

function task3(obj){
    obj={
        title:"concept of physics",
        author:"H.C. Verma",
        year:1992,
        greet:()=>{
            console.log(`greetings the title is ${obj.title} and author is :${obj.author}`)
        }
    }
    obj.greet();
}

function task3(obj){
    obj={
        title:"concept of physics",
        author:"H.C. Verma",
        year:1992,
        greet:()=>{
            console.log(`greetings the title is ${obj.title} and author is :${obj.author}`)
        }
    }
    obj.greet();
}
function task4(obj,year){
    obj=Object.assign(obj,{yearUpdate:(year)=>{
        obj.year=year;
    }})
    obj.yearUpdate(year)
    console.log(obj);
}
function task5(){
    let library = [
    {
        name:"page1",
        books:[{title:"book1"},{title:"book2"},{title:"book3"}]
    },
    {
        name:"page2",
        books:[{title:"book1"},{title:"book2"},{title:"book3"}]
    }

]

   console.log(library); 
   task6(library)
}

task5();

function task6(obj){
    console.log(obj[0].name);
    obj[0].books.forEach(element => {
        console.log(element.title)
    });
}

function task7(obj){
     
   obj.greeting = function(){
    return `${this.title} in ${this.year}`;
   }
   console.log(obj.greeting())
}

function task8(obj){
    for(const key in obj){
        console.log(`${key}: ${obj[key]}`)
    }
}
function task9(obj){
    console.log(Object.keys(obj));
    console.log(Object.values(obj));

}