// -- data type ==> string , number , undefined , null , boolean

// Mathematical operations ==> + - / * ** %  , ++ , --

// var n = 20
// var m = 30 
// var s = n + m

// var r = "str"
// var h = r + n
// var k = r / m 

// console.log(s)
// console.log(h)

// console.log(k) // NaN ==> Not a Number

// ++ increment
var a = 10
// console.log(a++) // 10   in memory = 11
// console.log(++a) // 12
// console.log(a) // 12


// -- decrement

// console.log(a--) // 10
// console.log(a) // 9
// console.log(--a) // 8


//// Assignment operations ==> += , -= , /= , *= , %=


var h = 10

// h = h + 5

h += 5

// console.log(h)

////// Comparison opertaors ==>( > , >= , < , <= , == , === , != , !==) ==> return boolean

var h = 10
var t = 20
var k = 10

// console.log(t > h)
// console.log(k >= h)

var g = 20
var l = "20"

// console.log(g == l ) // true  - value
// console.log(g === l ) // false - value , datatype

// console.log(g != l) // false  - value
// console.log(g !== l) // true - value , datatype


// unary operator ==> typeof

// console.log(typeof(l)) // return string
// console.log(typeof g)


// // js case sensitive
// // var number = "dfghjkl;"
// console.log(typeof g == "number")
// console.log(typeof g == "Number")


//// logical operators ==> && || !

var t = 20
var k = 10

var h = 10
var g = 20
var l = "20"


g > h, typeof l == 'string'

// console.log(g > h ) // true
// console.log(typeof l == 'number') // false

// console.log(g > h && typeof l == 'number' && h == 10 && k == 10 ) // false

// && ==> true , false , ture = false
//        true , true , true = true


var firstName = "Marwa"

var age = 20

// console.log(firstName == 'Marwa' || age == 30)


// console.log(age == 20) // true
// console.log(!age == 20) ; // false

/// ternary operators ==> (condition) ? true condition : false condition

// (firstName == 'Nouran') ? console.log('valid user') : console.log('invalid User') ;
// truthy value , false value
var lastName = "Ahmed"; // true
var lastName = 10; // true
var lastName = -30; // true
var lastName = " "; // true
var lastName = true; // true
var lastName = 0; // false
var lastName = ""; // false
var lastName = null; // false
var lastName; // undefined ==> false
var lastName = -0; // false
// (lastName) ? console.log('valid value') : console.log('invalid value') ;

var m = null;
// (!m) ? console.log('correct') : console.log('wrong')


var m = false;

// (!m) ? console.log('correct') : console.log('wrong') ;


// if condition

// if(condition){

// }
// else {

// }


// var p = prompt("enter your job")


// if (p == null) {
//     console.log('please enter your job')
// }
// else {
//     if (p == 'doctor' || p == "doc" || p == 'dr') {
//         var result = "welcome dr"
//         console.log(result)

//     }
//     else if (p == 'engineer' || p == 'eng') {
//         var result = "welcome eng"
//         console.log(result)
//     }
//     else if (p == 'developer' || p == 'dev') {
//         var result = "welcome dev"
//         console.log(result)
//     }
//     else {
//         var result = "invalid user"
//         console.log(result)
//     }
// }


// if(p == 'doctor' || p == "doc" || p == 'dr') {
//     var result = "welcome dr"
//     console.log(result)

// }
// else if(p == 'engineer' || p == 'eng'){
//       var result = "welcome eng"
//     console.log(result)
// }
// else if(p == 'developer' || p == 'dev'){
//       var result = "welcome dev"
//     console.log(result)
// }
// else {
//     var result = "invalid user"
//     console.log(result)
// }

var h = 10
var k = 20
var h = 10, k = 20


// var degree = prompt('enter your degree') , grade

// > 90 ==> A 
// > 80 < 90 ==> B
// > 70 < 80 ==> C 
// < 70 ==> F 


// variable 
// switch(variable){
//     case 1 : code ...
//     case 2 : code ...
//     case 3 : code ...
//     case 4 : code ...
//     case 5 : code ...
//     case 6 : code ...
//    default : code ...a.
// }




var age = 20

var age = "age = 20"

var age = "30"

// ===
// switch (age) {
//     case "age = 20":
//         var result = 'age = 20'
//         console.log(result)
//         break;
//     case 30:
//     case "30" :    
//         console.log('age = 30')
//         break;
//     case 50:
//         console.log('age = 50')
//         break;
//     default: console.log('invalid age')
// }



// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)


// for(variable ; condition ; increment/decrement){
//     code ...
// }


for(var i = 1 ; i <= 10 ; i++){
    console.log(i)
}

// for(; ;){
//     console.log('js')
// }