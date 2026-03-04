class BankAccount{

    #balance = 0;

    deposite(amount){
        this.#balance+=amount;
    }

    getbalance(){
        return this.#balance;
    }
}


const acc = new BankAccount();
acc.deposite(200);
console.log(acc.getbalance())
