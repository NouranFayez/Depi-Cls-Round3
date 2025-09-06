// let firstName : string ="Zein"
// // console.log(firstName)
// let age : number = 10
// // console.log(age)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.fullName = function () {
        return "ts";
    };
    return Person;
}());
var BankAccount = /** @class */ (function (_super) {
    __extends(BankAccount, _super);
    function BankAccount(account, dOfBirth, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.accountNum = account;
        _this.dateOfBirth = dOfBirth;
        return _this;
    }
    BankAccount.prototype.getAccountNum = function () {
        return this.accountNum;
    };
    Object.defineProperty(BankAccount.prototype, "_accountNum", {
        get: function () {
            return this.accountNum;
        },
        set: function (value) {
            if (typeof value === "number")
                this.accountNum = value;
            else
                this.accountNum = 0;
        },
        enumerable: false,
        configurable: true
    });
    return BankAccount;
}(Person));
// let u = new Person("zein" , 20)
// console.log(u.age)
// u.age = 30
// console.log(u)
var da = new Date();
da.setFullYear(2000, 2);
// console.log(d)
var bankAcc = new BankAccount(105, da, "zein", 10);
bankAcc.name = "Tamer";
bankAcc._accountNum = 123456;
console.log(bankAcc.dateOfBirth);
// bankAcc.dateOfBirth = ""
// console.log(bankAcc.dateOfBirth)
// console.log(bankAcc.getAccountNum())
// console.log(bankAcc._accountNum)
