
function task1(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(()=>resolve("promise is resolved"),2000);
        
    })
    promise.then(function(str){
        console.log(str);
    },function(err){
        console.log(err);
    })
}
// task1()

function task2(){
    let promise = new Promise((resolve, reject) => {
        const x=1;
        const y=2;
        if(x!==y){
        setTimeout(()=>reject("promise is rejected"),2000);
        }else{
        setTimeout(()=>resolve("promise is resolved"),2000);
        }
    })

    promise.then(function(str){
        console.log(str);
    }).catch(function(err){
        console.log(err)
    })



}
// task2()
function task3(){
    function fetchdata(data,time){
        return new Promise((resolve) => {
            setTimeout(()=>{
                console.log(`fetched : ${data}`);
                resolve(data);
            },time)
        })
    }
    fetchdata("Data1",1000).then((res)=>{
        console.log(`Processing: ${res}`);
        return fetchdata("data2",2000)
    }).then((res)=>{
        console.log(`Processing: ${res}`);
        return fetchdata("data3",1500)
    }).then((res)=>{
        console.log(`Processing: ${res}`);
        console.log("all data fetched")
    })
}
// task3();
async function task4(){
    let hello =await new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("promise is resolved");
        }, 1000);
    })
   
        console.log(hello)
    

}
// task4();

async function task5(){
    try{
    let pro = await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("promise is rejected")
        },1000)
    })
    }catch(err){
        console.log(err);
    }
}
// task5();
function task6(){
    const url = "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10"
    fetch(url).then((res)=>{
        return res.json();
    }).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err);
    })
}
// task6()
async function task7(){
    const url = "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10"
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Response status:${response.status}`)
        }
        const json = await response.json();
        console.log(json);
    }catch(err){
        console.error(err);
    }
}
// task7()
function task8(){
    const p1 = new Promise((resolve,reject)=>{
        resolve("p1 is resolved");
        
    })
    const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("p2 is resolved");},1000)
        // resolve("p2 is resolved");
        
    })
    const p3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("p3 is resolved");},500)
        // resolve("p2 is resolved");
        
    })
    const pAll= Promise.all([p1,p2,p3]).then((res)=>{
        console.log(res);
    });
    
    
}
// task8();
function task9(){
    const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("p1 is resolved");},3000)
        
    })
    const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("p2 is resolved");},1000)
        
        
    })
    const p3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("p3 is resolved");},1500)
        
        
    })

    const racep= Promise.race([p1,p2,p3]).then((res)=>{console.log(res);})
}
task9()