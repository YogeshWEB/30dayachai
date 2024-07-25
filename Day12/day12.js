function task1(){
    try{
        console.log("error is comining....");
        throw "this is error";
    }catch(err){
        console.log(err);
    }
}
// task1();


function task2(num1,num2){
    try{
        if(num2!==0){
            return num1/num2;
        }else{
            throw new Error("please do not give the value of num2 as 0");
        }
    }catch(err){
        console.log(err);
        return "your ans is ∞";
    }
}
// console.log(task2(1,2));
// console.log(task2(5,0));
function task3(flag){
    
    try{
        if(flag===true){
            console.log("try");
        }else{
            throw "err catch is excuted now"
        }
    }catch(err){
        console.log(err);
    }finally{
        console.log("finally is excuted");

    }

}
// task3();
// task3(true);
// task3(false);


function task4(){
    class Customclass extends Error {
        constructor(mess){
            // console.log(mess);
            super(mess)
            this.name ="Custom Error"
        }
    }

    function letstry(){
        try{
            throw new Customclass("this is custom error");
        }catch(err){
            if(err instanceof Customclass){
                console.log("custom errrrrrrrrr");
                console.log(err.message);
            }else{
                console.log("random errrrrrrrrror hhhhhhhhhhhhhhhhhhhhhhh");
                console.log(err.message);
            }
        }
    }
    letstry();
}
// task4();

function task5(){
    class myerror extends Error{
        constructor(mess){
            super(mess);
            this.name="My Error";
        }
    }
    function stringcheck(str=""){
        try{
            if(!str&&str.trim()===""){
                throw new myerror("string can't be empty")
            }
        }catch(error){
            if (error instanceof myerror) {
                console.log("Caughr a custom Error:", error.message);
              } else {
                console.log("An unknown error occured:", error.message);
              }
        }
    }
    stringcheck();
    stringcheck("")
    stringcheck("a")
}

// task5()


function task6(){
    let n = Math.floor(Math.random()*10);
    console.log(n);
    const pro = new Promise((resolve,reject)=>{
        if(n<10&&n>5){
            resolve("you chosse number between 5 to 10 so everything get resolved")
        }else{
            reject("you chosse number between 0 to 5 so everything get rejected")
        }
    })
    pro.then(res => {console.log(res);}).catch(err =>{console.log(err);})
}
// task6();
async function task7(){
    let n = Math.floor(Math.random()*10);
    console.log(n);
    try {
        const pro = await new Promise((resolve,reject)=>{
            if(n<10&&n>5){
                resolve("you chosse number between 5 to 10 so everything get resolved")
            }else{
                reject("you chosse number between 0 to 5 so everything get rejected")
            }
        })
    } catch (error) {
        console.log(error)
    }
    

}
// task7()

function task8(url){
    fetch(url).then(res=>{
        if(!res.ok){
        throw new Error(`http error: ${res.status}`);
        
    }
    return res.json()
}).then((res)=>{
    console.log(res);
}).catch(err=>{
        console.log(err);
    })
}
let goodurl= "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10";
let badurl = "https://ap.fapi.app/api/v1/public/randomusers?page=1&limit=10"
// task8(goodurl)
// task8(badurl)

async function task9(url){
    try{
        let res = await fetch(url);
        
        if(!res.ok){
            throw new Error(`http error: ${res.status}`);
        } 
        let data = await res.json();
        console.log(data);
    }catch(err){
        console.log(err.message);
    }
}
task9(goodurl)
task9(badurl)