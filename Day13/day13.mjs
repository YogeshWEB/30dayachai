import {addtwoNo,task2} from './task1.mjs';
import {add,sub,mul,div} from './math.mjs'
import obj from './defult.mjs'
import * as alll from './task5.mjs';
import lodash from 'lodash'
import axios from 'axios'
// task1
console.log(addtwoNo(10,6));
// task2
console.log(task2.name,task2.age,task2.isAdult());
// task3
console.log(add(2,3));
console.log(sub(2,3));
console.log(mul(2,3));
console.log(div(2,3));
console.log(div(2,0));


// task4
let {f1,f2,f3,f4} = obj;
console.log(f1(2,3));
console.log(f2(2,3));
console.log(f3(2,3));
console.log(f4(2,3));
console.log(f4(2,0));

// task5
console.log(alll.a);
console.log(alll.b);
console.log(alll.c);
console.log(alll.d);
console.log(alll.e);
console.log(alll.f);
console.log(alll.g);
console.log(alll.h);
console.log(alll.i);
console.log(alll.j);
let arr = [1,32,44,34,56,4,85,6,4,44];
// task6
console.log(lodash._.chunk(arr,2));
console.log(lodash._.drop(arr,2));
console.log(lodash._.fill(arr,"*",1,9));
// task7
let goodurl= "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10";
axios.get(goodurl).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})

