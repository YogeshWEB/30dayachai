let num1= 10;
let num2 = 3;

function activity1(num1,num2){
    task1(num1,num2); //13
    task2(num1,num2);//7
    task3(num1,num2);//30
    task4(num1,num2);//3.3333333333333335
    task5(num1,num2);//1
}
activity1(num1,num2);
function task1(num1,num2){
    console.log(num1+num2);
}
function task2(num1,num2){
    console.log(num1-num2);
}
function task3(num1,num2){
    console.log(num1*num2);
}
function task4(num1,num2){
    console.log(num1/num2);
}
function task5(num1,num2){
    console.log(num1%num2);
}

let count =22;

function activity2(count){
    task6(count);
    task7(count);
}
activity2(count);
function task6(count){
    count+= 2;//24
    console.log(count);
}
function task7(count){
    count-= 2;//20
    console.log(count);
}
function activity3(num1,num2){
    task8(num1,num2);
    task9(num1,num2);
    task10(num1,num2);
}
activity3(num1,num2);
function task8(num1,num2){
    console.log(num1<num2);//false
}
function task9(num1,num2){
    console.log(num1>num2);//true
}
function task10(num1,num2){
    num1=10;
    num2="10";
    console.log(num1==num2);//true
    console.log(num1===num2);//false
}
function activity4(){
    task11();
    task12();
    task13();
}
activity4();

function task11(){
    let bool1 = true;
    let bool2 = true;
    console.log(bool1&&bool2);
    bool2=false;
    console.log(bool1&&bool2);
    bool1=false;
    console.log(bool1&&bool2);
}
function task12(){
    let bool1 = true;
    let bool2 = true;
    console.log(bool1||bool2);
    bool2=false;
    console.log(bool1||bool2);
    bool1=false;
    console.log(bool1||bool2);
}
function task13(){
    let bool1 = false;
    if(!bool1){
        console.log("bool is not true");
    }
}
function activity5(){
    let num = 5;
    task14(num);
    num =-1;
    task14(num);
}
activity5();
function task14(num){
    (num>=0)? console.log('number is positive'):console.log('number is negative');
}