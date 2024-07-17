function task1(num){
    if(num%2===0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
task1(6);
function task2(num){
    return num*num;
}
console.log(task2(5));

const task3 = function(num1,num2){
    if(num1>num2){
        console.log(`${num1} is greater`);
    }else if(num1<num2){
        console.log(`${num2} is greater`);
    }else{
        console.log("both numbers are equal");
    }
}
task3(2,3)

const task4 = function(str1,str2){
    return str1+str2;
}
console.log(task4("Hello ", "World!"));

const task5 =(num1,num2)=>{
    return num1+num2;
}
console.log(task5(5,4));

const task6 =(str,char)=>{
    
    if(str.length===0){
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        if(str[i]===char){
            return true;
        }
        
    }
    return false;

}

console.log(task6("kfiji","a"));
function task7(a,b=5){
    return a*b;
}
console.log(task7(5,7));
console.log(task7(2));

function task8(name,age=18){
    return `Hello ${name} age ${age}`;
}
console.log(task8("yogesh",23));
function fun(){
    console.log("function is called: ");
}
function task9(fun,num) {
    for (let i = 0; i <num; i++) {
        fun();
        console.log(i+1);
        
    }
}
task9(fun,5);

function square(num){
    return num*num;
}
function area(num){
    return Math.PI*num;

}
function task10(fun1,fun2,radius) {
    return [fun1(radius),fun2(fun1(radius))];
}

console.log(task10(square,area,5));