// var let const

// let , const ==> block scope
// var ==> global , function scope


// console.log(firstName) // undefined
var firstName = "Nouran"
var firstName = "Ahmed"

// let lastName = "Fayez"
// let lastName = "Mohamed"


let lastName = "Mohamed"
lastName = 30
// console.log(lastName)

const fullName = "Nouran Fayez"
// fullName = 30
// console.log(fullName)

let f = "lorem"

var age = 20

function test() {
    // var h = 30
    var age = 40
    if (true) {
        var num = 10
        let num2 = 20
        console.log(num)
        console.log(num2)
        console.log(f)
    }
    console.log(`num = ${num}`)
    // console.log(`num2 = ${num2}`)

}

// test()
// console.log(`age = ${age}`)

// console.log(num)


// DOM ==> document object model
// Bom ==> browser object model



////////////////////////////////////////////////////////////


let cardsContainer = document.getElementById('cards-container')


function handleAddDiv() {
    let div = creatElement('div')
    div.setAttribute('class', 'card')

    let p = creatElement("p")
    p.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, facere."
    let btn = creatElement('button')
    btn.innerText = "Read More"


    div.appendChild(p)
    // div.prepend(btn)
    div.appendChild(btn)

    cardsContainer.appendChild(div)

    console.log(div)
    console.log(p)
    console.log(btn)

}

let creatElement = (tagName)=>{
    let element = document.createElement(tagName)
    return element
}


//           <div class="card">
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, facere.</p>
// <button>Read More</button>
//         </div>


let scrollDiv = document.getElementById('scroll-card')

scrollDiv.addEventListener('scroll' , function(e){
    console.log(e.target.scrollTop)
    if(e.target.scrollTop > 200) scrollDiv.style.backgroundColor = "lightgray"
    else scrollDiv.style.backgroundColor = "white"

})

window.addEventListener('scroll' , ()=>{
    console.log(window)
    let arrowBtn = document.querySelector('#topArrow');
    // if(document.documentElement.scrollTop > 300) arrowBtn.style.display = "block"
    (document.documentElement.scrollTop > 300)
     ? arrowBtn.classList.remove('d-none')
     : arrowBtn.classList.add('d-none')
})



let setTime = setTimeout(() => {
    console.log('javascript')
}, 3000);


// 0 - 100
let i = 0
let counter = document.getElementById('counter')
let setInt = setInterval(() => {
    counter.innerText = i
    if(i == 100) clearInterval(setInt)
    console.log('Depi - cls')
    i++
}, 100);

// let setInt2 = setInterval(() => {
//     counter.innerText = i
//     if(i == 100) clearInterval()
//     console.log('Depi - cls')
//     i++
// }, 100);


console.log(setTime)
console.log(setInt)
// console.log(setInt2)



// document.getElementById('id') // js

// $("#id") // jquery


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items : 2 ,
    margin: 40 ,
    nav : true ,
    navText : [ '<i class="fa-solid fa-arrow-left-long "></i>' , `<h3>Next</h3>` ]
  });
});