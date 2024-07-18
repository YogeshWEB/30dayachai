function task1(){
    let arr = [];
    for (let i = 1; i <= 5; i++) {
        arr.push(i);
        
    }
    console.log(arr);
    task2(arr)
    task3(arr)
    task4(arr)
    task5(arr)
    task6(arr)
    task7(arr)
    task8(arr)
    task9(arr)
    task10(arr)
    task11(arr)
}
task1();

function task2(arr){
    console.log(arr[0]+ " " +arr[arr.length-1]);
}
function task3(arr) {
    arr.push(6);
    console.log(arr);
}
function task4(arr) {
    arr.pop();
    console.log(arr);
}
function task5(arr){
    arr.shift();
    console.log(arr);
}
function task6(arr){
    arr.unshift(0,1);
    console.log(arr);
}
function task7(arr){
    let arr1=arr.map(x=>x*2);
    console.log(arr1);
}
function task8(arr){
    let arr1 = arr.filter(x=> x%2===0);
    console.log(arr1);
}
function task9(arr){
    let sum = arr.reduce((acc,curr)=>{
        return acc + curr
    })
    console.log(sum);
}

function task10(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        
    }
}
function task11(arr) {
    arr.forEach(element => {
        console.log(element)
    });
}
function task12() {
    let arr = [];
    let count =1;
    for (let i = 0; i < 3; i++) {
        arr[i]=[];
        for(let j=0;j<3;j++){
            arr[i].push(count);
            count++;
        }
        
    }
    console.log(arr);
    task13(arr,3,3,7);
    task13(arr,3,3,13);
    
}
task12();
function task13(arr,row,col,ele){
    console.log(arr[0][0])//first element
    console.log(arr[row-1][col-1])//last element
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(arr[i][j]===ele){
                console.log(`element found at ROW ${i}, COL${j}  element:${arr[i][j]}`);
                return;
            }
        }
    }
    console.log(`element not found `);
}