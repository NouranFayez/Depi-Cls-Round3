// let h2Element = document.querySelector('#h2_element')

// let h2Class = document.getElementsByClassName('h2_class')

// console.log(h2Class)


// relationship of Elments
// console.log(h2Element.nextElementSibling)
// console.log(h2Element.previousElementSibling)
// console.log(h2Element.parentElement)
// console.log(h2Element.firstElementChild)
// console.log(h2Element.lastElementChild)



// name ==> 3 character
// email ==> username@domain.subdomain
// password ==> 1 uppercase , 1 lowecase , 1 number , 1 special charater $&%!@*


// let username = document.getElementById('userName')
// username.addEventListener('input' , function(){
//     console.log(username.value)
// })


let myform = document.getElementById('myForm')
myform.addEventListener('input', function (e) {
    if (e.target.id == 'userName') nameValidation(e.target)
    else if (e.target.id == "userLastName") nameValidation()
    else if (e.target.id == 'userEmail') emailValidation(e.target)
    else if (e.target.id == 'userPassword') passwordValidation(e.target)
})

let nameValidation = (element) => {
    console.log(element.value.length)
    let inputValue = element.value.trim()
    if (inputValue.length < 3) handleError(element, "please enter at least 3 character")
    else handleError(element)
}

let handleError = (input, msg = "") => {
    input.nextElementSibling.innerText = msg
}

let emailValidation = (element) => {
    // nouran@emailn.com
    let inputValue = element.value
    // const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(emailRegex.test(inputValue));
    (emailRegex.test(inputValue)) ? handleError(element) : handleError(element, 'please enter a valid email')

}

let passwordValidation = (element) => {
    let inputValue = element.value
    // var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    (!strongRegex.test(inputValue))
        ? handleError(element, 'please enter at least 1 lowercase , 1 uppercase , 1 number , 1 special charater')
        : handleError(element);

}