// -- DOM ==> document object model

// var h2Elements = document.getElementsByTagName("h2") // HTMLCOLLECTION

// h2Elements[1].innerText = "Javascript"

// h2Elements.forEach(element => {
//     element.innerText = "Javascript"
// });

// for(var i =0 ; i< h2Elements.length ; i++){
//     h2Elements[i].innerText = "Javascript"
// }
// console.log(h2Elements)



// var h2Class = document.getElementsByClassName('h2-class') // HTMLCOllection
// console.log(h2Class)



// var h2QuerySelector = document.querySelector('.div-style')
// h2QuerySelector.style.backgroundColor = "lightblue"
// h2QuerySelector.style.padding = "5%"

// var h2 = document.getElementById('h2_id')

// h2.style.backgroundColor = "#CCCCCC"
// h2.style.color = "blue"
// h2.style.border = "4px solid"
// h2.style.padding = "3%"

// h2.innerText = "JavaScript"
// h2.innerHTML = `<span>Lorem, ipsum dolor.</span>
// <a href=''>JavaScript</a>`
// console.log(h2)


// var divElements = document.querySelectorAll('.div-style') // nodeList 
// console.log(divElements)
// // divElements.style.border = "2px solid red"

// divElements.forEach((element)=>{
//     element.style.border = "2px solid red"
// })


// var card = document.querySelector('#div_id')

// card.className = "card d-flex text-center"

// card.classList.add('card')
// card.classList.remove('d-flex')
// card.classList.toggle('text-center')





function changeDiv() {
    var cardDiv = document.querySelector('#div_id')
    cardDiv.classList.toggle('card')

}


function handleChange(flag, element) {
    // var divContainer = document.getElementById(elementId);
    (flag == 'mouseenter')
        ? element.style.backgroundColor = "lightgray"
        : element.style.backgroundColor = "lightblue";

}

var input = document.querySelector('#userName')

input.addEventListener("input", () => {
    console.log(`typing = ${input.value}`)
    // console.log(input.nextElementSibling)
    input.nextElementSibling.innerText = input.value

})

input.addEventListener('change', () => {
    console.log(`change = ${input.value}`)
})


// var btn = document.getElementById('submit-btn')

// btn.addEventListener('submit' , function(){
//     console.log('submit')
// })

var users = []

var addUser = (name, email) => {
    var user = {
        name,
        email
    }
    users.push(user)
    console.table(users)
}

var login = document.getElementById('loginForm')
login.addEventListener('submit', (e) => {
    // console.log('submitting')
    e.preventDefault()
    // console.log(e)
    console.log(e.target.elements.userName.value)
    console.log(e.target.elements.userEmail.value)
    addUser(e.target.elements.userName.value, e.target.elements.userEmail.value)

})





