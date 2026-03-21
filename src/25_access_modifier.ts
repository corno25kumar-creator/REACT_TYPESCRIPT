class BankAccount {
     public owner : string
     private balance = 0
     #opt = '27t32834'

     constructor(owner:string){
        this.owner = owner
     }

     deposit(amt:number){
        if(amt<=0) throw new Error (`amount must be positive`)
     }


     getBalance(){
        return this.balance
     }

     verifyOtp(code:string){
        return this.#opt === code 
     }
}

const account = new BankAccount('sam')
account.deposit(5000)
console.log(account.getBalance())