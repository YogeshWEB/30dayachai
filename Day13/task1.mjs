export function addtwoNo(n1,n2){
    return n1 + n2;
}

export const task2={
    name:"Yogesh",
    age:23,
    isAdult:function(){
        if(this.age>18){
            return ("yes eligible to vote");
        }else{
           return ("not eligible to vote");
        }
    }
}