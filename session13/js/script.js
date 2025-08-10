// var userInfo = ['ahmed' , 'mohamed' , 20 , false , 'nasr city']

// var firstName = "Nouran"
// var lastName = "Ahmed"

// window.prompt()

// prompt()

var Address= "new cairo"
var userInfo = {
    firstName : 'Tamer' ,
    lastName : 'Fayez',
    Address: 'Nasr city',
    fullName : function(){
        return `${this.firstName} ${this.lastName}`
    },
    phoneNumbers : function(){
        return {
            homeNo : "012222222222",
            officeNo: "03322222222",
            faxNo : function(){
                return "02362522222"
            }
        }
    },
    addressList : {
        officeAddress: function(){
            return "October"
        }
    },
    myFunc : ()=>{
        console.log(this)
        return userInfo.Address
    }

}

// console.log(userInfo.lastName)

userInfo.age = 40 // set property

userInfo.Address = "Maadi"
// console.log(userInfo.fullName())
// console.log(userInfo.phoneNumbers().officeNo)
// console.log(userInfo.phoneNumbers().faxNo())
// console.log(userInfo.addressList.officeAddress())
// console.log(userInfo.myFunc())



var user = {
    name:"Nouran",
    address : "Nasr city"
}
var user2={
    name : "Marwa",
    address : "October"
}
var user3 ={
    name : "Ahmed" ,
    address : "Maadi"
}


var users = [
    {
    name:"Nouran",
    address : "Nasr city"
},
{
    name : "Marwa",
    address : "October"
},
{
    name : "Ahmed" ,
    address : "Maadi"
}
]
// console.log(users[0])
// console.log(users[1])
// console.log(users[2])
users.forEach((element , index , array)=>{
    // if(element.address == "October")
        // console.log(element)
})


var element = users.find(element=>element.address=="October")
var index = users.findIndex(element=>element.address=="October")
// console.log(element)
// console.log(index)



// var userName = prompt('enter userName')
// var userAddress = prompt('enter Address')

// users.push({userName , userAddress})

// console.log(users)



///// function numberOfUsers() // 3

/// function addUser() ==> name , id (unique) , balance

// function editUserBalanceById() ==> id , newBalance

// function deleteUserById() ==> id


// console.table(users)

var usersList =[]
var addUser = ()=>{
    var user = {
        name : prompt('enter userName '),
        id : prompt('enter user id'),
        balance : prompt('enter user balance')
    }
    usersList.push(user)
    console.table(usersList)

}

// addUser()
// addUser()
var users = [
    {
    name:"Nouran",
    address : "Nasr city"
},
{
    name : "Marwa",
    address : "October"
},
{
    name : "Ahmed" ,
    address : "Maadi"
}
]

var courses =['html' , 'css' , 'js']

// console.log(courses.toString())
// localStorage.setItem('firstName' , "Nouran")
// console.log(JSON.stringify(users))


// localStorage.removeItem('users')

localStorage.setItem('users' , JSON.stringify(users))

var usersLocalStorage = JSON.parse(localStorage.getItem('users'))

usersLocalStorage.push({name : 'marwa'})

console.log(usersLocalStorage)




// https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html


// tradex template ==> home & contact page
// https://digitaltemplatemarket.com/wp/tradex-premium/contact/ 
// https://digitaltemplatemarket.com/wp/tradex-premium/
