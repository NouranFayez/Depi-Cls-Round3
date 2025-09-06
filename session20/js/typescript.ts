// let firstName : string ="Zein"
// // console.log(firstName)
// let age : number = 10
// // console.log(age)

// // let p : string | null = prompt("enter your name")
// // console.log(p)

// // tuple
// let u :[string , number , boolean] = ["html" , 3 , true] 
// // console.log(u)
// let a : string[] = ["html" , "css" , "ts" ]

// let h :(string | number)[]=  ["html" , "css" , "ts" , 4 , "angular" , 5 ]

// // function getNumbers(num:number | string ):number | string{
// //     // return num
// //     return "js"
// // }
// // getNumbers()

// function getNumbers(num:any = null ):number | string{
//     // return num
//     return "js"
// }
// getNumbers()

// let b :any = "ts"
// b = 20
// // console.log(b)
// type strText = string | number | boolean
// let LName : strText = 2
// // let obj = {
// //     name : "Nouran",
// //     age : 31
// // }
// interface User {
//     name : string ;
//     age? : number;
// }
// interface User {
//     address : string;
//     getFullName():string;
//     getLname():void;
// }
// let user : User ={
//     name : "zein",
//     address : "maadi",
//     getFullName(){
//         return "ahmed"
//     },
//     getLname(){
//        console.log('ts') 
//     }
// }
// let user2 : User = {
//     name : 'Tamer',
//     age : 10,
//     address : "october",
//     getFullName(){
//         return "ts"
//     },
//     getLname(){
//         console.log('Fayez')
//     }
// }
// console.log(user2.getLname())
// let d = new Date()
class Person {
   public name : string ;
   public age : number;

    constructor(name : string , age : number){
        this.name = name
        this.age = age
    }
    fullName():string{
        return "ts"
    }
}
class BankAccount extends Person {
   private accountNum : number
   readonly dateOfBirth : Date
  
    constructor(account:number , dOfBirth : Date , name : string , age : number , ){
        super(name , age)
        this.accountNum =  account
        this.dateOfBirth = dOfBirth
    }

    getAccountNum (){
        return this.accountNum
    }
    get _accountNum(){
        return this.accountNum
    }
    set _accountNum(value : any){
        if(typeof value === "number")
        this.accountNum = value
        else this.accountNum = 0
    }
}
// let u = new Person("zein" , 20)
// console.log(u.age)
// u.age = 30
// console.log(u)

let da = new Date()
da.setFullYear(2000 , 2)
// console.log(d)
let bankAcc = new BankAccount(105 , da, "zein" , 10)

bankAcc.name = "Tamer"
bankAcc._accountNum = 123456
console.log(bankAcc.dateOfBirth)
// bankAcc.dateOfBirth = ""

// console.log(bankAcc.dateOfBirth)
// console.log(bankAcc.getAccountNum())
// console.log(bankAcc._accountNum)



