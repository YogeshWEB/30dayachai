 const obj={
    f1: function (n1,n2){
        return n1+n2;
    },
    f2: function (n1,n2){
        return n1*n2;
    },
    f3: function (n1,n2){
        return n1-n2;
    },
    f4: function (n1,n2){
        if(n2===0){
            return "undefined please dont use second variable as 0"
        }
        return n1+n2;
    }
}
export default obj;