function task1(){
    let name = "Myname";
    function getName(){
        console.log(name);
    }
    getName()

}
task1();

function counter(){//task2
    let count = 0;
    function inc(){
        count++;
        console.log(count);
        return count
    }
    return {inc}
}

const count = counter()
count.inc()
count.inc()
function task3(){
    let genId = 0;
    let lastId = 0;
    function Gid(){
        genId++;
        return genId;
    }
    function trackLastId(){
        lastId=genId;
        return lastId;
    } 
    function doit(){
        trackLastId();
        Gid();
        console.log(lastId,genId);
    }
    return doit;
}
const ID =task3();
ID()
ID()
ID()
ID()
function task4(){
    let name = "Yogesh";
    function greet(){
        console.log("hello",name);
    }
    return greet
}
const hello = task4()
hello()

function task5(){
    let arrfun=[];
    for(let i=0;i<10;i++){
        arrfun.push(function(){
            return i;
        })
    }
    return arrfun;
}
let makearr = task5();
makearr.forEach((index)=>{console.log(index());})

function task6(){
    let items = [];
    let myid =0
    function add(item){
        items.push({name:item,
            id:myid
        })
        myid++;
    }
    function remove(Fid){
        items=items.filter((data)=>{return data.id!==Fid})
    }
    function show(){
        return items;
    }
    return {add,remove,show}
}
let list = task6();
console.log(list);
console.log(list.show());
list.add("apple");
console.log(list.show());
list.remove(0);
console.log(list.show())


function calSqur(n){
    return n*n;
}
function task7(fn){
    const cache = {};
    return function (n){
        if(cache[n]){
            return `calculated by cache ${cache[n]}`
        }
        const cl = fn(n);
        cache[n]= cl;
        return `Calculated by function ${cl}`
    }
}
let check = task7(calSqur);
console.log(check(4));
console.log(check(4));

function task8(n){
    let fac = 1;
    for(let i=1;i<=n;i++){
        fac *= i;
    }
    return fac;
}
console.log(task8(2));
console.log(task8(6));
console.log(task8(5));
console.log(task8(4));