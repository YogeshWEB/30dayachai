function task1(){
    for(let i=1;i<=10;i++){
        console.log(i);
    }
}
task1();

function task2(){
    for(let i=1;i<=10;i++){
        console.log(`5 X ${i} = ${5*i}`);
    }
}
task2();

function task3(){
    let sum=0;
    let i=1;
    while(i<=10){
        sum+=i;
        i++;
    }
    console.log(sum);
}
task3();

function task4(){
    let i=10;
    while(i>0){
        console.log(i);
        i--;
    }
}
task4();
function task5() {
    let i=1;
    do {
        console.log(i);
        i++;
    } while (i<=5);
}
task5();
function task6(num){
    let fac=1;
    if(num===0){
        console.log(fac);
        return;
    }
    if(num<0){
        console.log("not defined");
    }
    do{
        fac*=num;
        num--;
    }while(num>0);
    console.log(fac);
}
task6(2);
task6(3);
task6(1);
task6(0);

function task7(num){
    let str="";
    for(let i=0;i<num;i++){
        for (let j = 0; j <= i; j++) {
            str+="* ";        
        }str+="\n";
    }
    console.log(str);

}
task7(5);

function task8(){
    for(let i=1;i<=10;i++){
        if(i===5){
            continue;
        }
        console.log(i);
    }
}
task8()

function task9(){
    for(let i=1;i<=10;i++){
        console.log(i);// if we need to include 7
        if(i===7){
            break;
        }
        console.log(i);//if we do not need to include 7
        
    }
}
task9()