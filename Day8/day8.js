let name = "yogesh";
let age= 23;
let task1= `${name} age ${age} `
console.log(task1);


// task2
console.log(`    M
    U
    L
    T
    I
    
    LINE
    
    STRING`);

// TASK3
 let arr = [1,2,3,4,5];
 let [a,b] = arr;
 console.log(a,b);
// TASK4
 let obj = {
    title:"book Title",
    author:"Author of book"
 }
let {title:c,author:d} = obj
 console.log(c,d);

//  TASK5
let arrNew = [...arr,6,7];
console.log(arr);
console.log(arrNew);

function task6(...argu){
    let total=0;
    for (const i of argu) {
        total += i ; 
    }
    return total
}
console.log(task6(1,2,3,4,5,6,7,8,9,10))

function task7(a,b=1){
    return a*b;
}
console.log(task7(4,5),task7(5));
// task8
let person = {name,age};
person.greet = function(){
    console.log(`${this.name} ${this.age} welcome`);
}
console.log(person);
person.greet();

// TASK9
let x= "name";
let y=  "place";
let newobj = {
    [x] : "yogesh",
    [y] :23
}
console.log(newobj);