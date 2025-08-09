// for(var i = 1 ; i<=10 ; i++){
 
//     if(i == 8){
//         console.log('num = 8')
//         break
//     } 
//    else if(i == 4) continue
//    else console.log(i)
// }

// while , do-while (search)


// var i = 1
// while(i<=10){
//     console.log(i)

//     i++
// }



// function functionName(){
//     code ...
// }


// functionName()

// var p = prompt()


// function getNumber(){
//     // console.log(10)


//     return "js"
// }

// var num = getNumber()

// console.log(num)



// ahmed
// function getUser(){
//     var p = prompt('enter your name')


// }



// function sum(num1 = 2 , num2 = 50){
//     // var num1 = 10
//     // var num2 = 20
//     // return num1 > num2
//     // console.log(num2) // undefined
//     return num1 + num2
// }

// var result = sum(100 , 40)
// var result = sum(200 , 60)
// var result = sum(4 , 10)
// var result = sum('html' , 'js')
// console.log(result)


function looping(start , end){
    for(var i = start ; i<= end ; i++){
        // console.log(i)
    }
}

// looping()
// looping()
looping(4 , 20)

// strat , end , contNum , breakNum




// var fName
// function getName(){
//      fName = prompt('enter you name')
//      lastName = prompt('enter your last Name')
// }



// var firstName = getName()
// // console.log(firstName)
// console.log(fName)
// console.log(lastName)


// function statment
function getNum(num1){
    var sum = num1 + 20
    return sum
}

// var res = getNum(10)
// function expression
var getFullName = function(){
    var p = prompt('enter your full name')

    return p
}
// console.log(getFullName())

// arrow function 
// var fullName = ()=>{
    // var res = "js"
//     console.log(res)
//     return "arrow function"
// }
var fullName = (firstName , lastName)=> `${firstName} ${lastName}`

var getResult = (num1 , num2)=> num1 > num2


// console.log(fullName('tamer' , 'ahmed')) // undefined
// console.log(getResult(20 , 3)) 

////////////////////////////////////////////////

// var firstName = "Tamer"
// var lastName = "Fayez"
// var age = 40
// var job = "Engineer"
// var isMarried = true

var userInfo = ["Tamer" , "Fayez" ,  40 , "Engineer" ,  true ]


console.log(userInfo[2])
userInfo[5] = 'Nasr city'



userInfo[userInfo.length] = "maadi"

console.log(userInfo.length)


//////////////////// Array Methods

userInfo.push(true , 10)
userInfo.unshift("zein" , false)

userInfo.pop()
userInfo.pop()

userInfo.shift()


// console.log(userInfo)


// console.log(userInfo.includes("tamer"))


// var names = ['Nouran' , '']

// function addUser==> 3 user 
// function isFound() 



// splice ==> add item/s , remove item/s , add/remove


var courses = ["html" , "css" , "bootstrap" , "node" , "angular"]

// splice(index , deletedCount , item/s)

courses.splice(2 , 0 , 'js' , 'ts') // add items

courses.splice(5 , 1) // delete item

courses.splice(4 , 2 , "Node" , "Express") // add /remove
console.log(courses)


// console.log(courses[0]);
// console.log(courses[1]);
// console.log(courses[2]);
// console.log(courses[3]);
// console.log(courses[4]);
// console.log(courses[5]);


for(var i = 0 ; i < courses.length ; i++){
    // console.log(courses[i])
}


courses.forEach((ele , i , arr)=>{
    // console.log(ele)
    // console.log(i)
    // console.log(arr)
})


var ids = [10 , 5, 2, 7]

var ele = ids.find((item)=> item > 5) /// item
var ele = ids.find((item)=> item > 50) /// item
// var ind = ids.findIndex((ele)=>{
//     return ele > 5
// })
var ind = ids.findIndex((ele)=> ele > 5) /// index
var ind = ids.findIndex((ele)=> ele > 50) /// index -- (-1)

console.log(ele)
console.log(ind)


var arr = ids.filter(item => item > 5)
var arr = ids.filter(item => item > 50)

console.log(arr)


console.log(Math.random())







