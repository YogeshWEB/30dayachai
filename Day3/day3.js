function task1(num){
    if(num>0){
        console.log(`${num} is positive`);
    }else if(num<0){
        console.log(`${num} is negative`);
    }else{
        console.log(`${num} is = zero`);
    }
}
task1(1);
task1(-12);
task1(0);
function task2(num){
    if(num>=18){
        console.log("You are eligible to vote");
    }else{
        console.log(`You are not eligible to vote as per now but you can vote in ${18-num} years`);
    }
}
task2(4);
task2(21);
function task3(num1,num2,num3){
    if(num1>num2){
        if(num1>num3){
            console.log(`${num1} is largest among three`);
        }else{
            console.log(`${num3} is largest among three`);
        }
    }else{
        if(num2>num3){
            console.log(`${num2} is largest among three`);
        }else{
            console.log(`${num3} is largest among three`);
        }
    }
}
task3(2,3,60);
task3(2,1,0);
task3(6,8,2);
function task4(num){
    switch (num) {
        case 1:
            console.log("monday")
            break;
        case 2:
            console.log("tuesday")
            break;
        case 3:
            console.log("wednesday")
            break;
        case 4:
            console.log("thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("saturday");
            break;
        case 7:
            console.log("sunday");
            break;
        default:
            console.log("please enter the number between 1-7")
            break;
    }
}
task4(1)
task4(2)
task4(3)
task4(4)
task4(5)
task4(6)
task4(7)
task4(0)

function task5(num){
    switch(num){
        case (num>=0&&num<33):
            console.log("F");
            break;
        case (num>=33&&num<50):
            console.log("D");
            break;
        case (num>=50&&num<60):
            console.log("C");
            break;
        case (num>=60&&num<70):
            console.log("B");
            break;
        case (num>=70&&num<=100):
            console.log("A");
            break;
        default:
            console.log("please enter valid percentage");
            break;
    }
}
task5(55);


function task6(num){
    (num%2===0)?console.log("even"):console.log("odd")
}
task6(23);
task6(22);
function task7(num){
    if(num%4===0){
        if(num%100===0){
            if(num%400===0){
                console.log("leap year");
            }
            else{
                console.log("NOT a leap year");
            }
        }
        else{
            console.log("leap yaer")
        }
    }
}
task7(2024);
task7(100);
task7(400);