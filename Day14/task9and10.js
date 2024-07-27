class Account{
    #balance;
    constructor(intialvalue){
        if(intialvalue<0){
            throw new Error("bankBalance cannot be negative")
        }
        this.#balance = intialvalue;
    }
    deposite(m){
        if(m<0){
            throw new Error("deposite money cannot be negative if you want to withdraw then please use wuthdraw function")
        }
        this.#balance+=m
    }
    withdraw(m){
        if(m>this.#balance){
            throw new Error("Not enough balance")
        }
        this.#balance -= m;

    }
    getbalance(){
        console.log(this.#balance);
    }
}
let A1 = new Account(2000);
A1.getbalance();
A1.deposite(500);
A1.getbalance();
A1.withdraw(500);
A1.getbalance()
A1.withdraw(500);
A1.getbalance()
A1.withdraw(500);
A1.getbalance()
A1.withdraw(500);
A1.getbalance()
A1.withdraw(500);
A1.getbalance()
A1.withdraw(500);
A1.getbalance()