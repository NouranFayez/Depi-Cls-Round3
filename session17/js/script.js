
// let arr = [1,3,4,6]
// arr.forEach((item , index , arr)=>{

// })


////////////////// call back function 
// let sum = (num , cb)=>{
//     console.log(num)
//     setTimeout(()=>{
//         // if(num > 20) return 'num is greater than 20'
//         if(num > 20) cb('num is greater than 20' , true)
//             else cb('less than 20' , false)
//         // console.log('ay 7aga')
//     } , 3000)
// }

// console.log(sum(30))
// alert(sum(30))

// sum(10 , (res , flag)=>{
//     console.log(res)
//     alert(res)
// })


// let func = (num)=>{
//     console.log(num)
// }

// func(30)



/////////// promise

// let date = new Date()
// let p = new Promise()

// const myPromise = (val)=>{
//  return new Promise((res , rej)=>{
//     setTimeout(()=>{
//         if(typeof val == 'number') res(val*2)
//         else  rej('not a number')
//     }, 2000)
//  })
// }
//////////////////////// then catch ==> promise handling
// myPromise(20).then((result)=>{
//     console.log(result) // 40
//     return result + 5
// }).then((num)=>{
//     console.log(num)
//     return num * 100
// }).then((data)=>{
//     console.log(data)
// })
// .catch((e)=>{
//     console.log(e)
// })


///////// error handling ==> try catch

// try{
//     console.log(firstName)

// }
// catch(e){
//     console.log(e)
//     alert('there is an error')
// }

// let lastName = "Ahmed"
// console.log(lastName)


/////////////////// async await ==> promise handling
// const myPromise = (val)=>{
//  return new Promise((res , rej)=>{
//     setTimeout(()=>{
//         if(typeof val == 'number') res(val*2)
//         else  rej('not a number')
//     }, 2000)
//  })
// }


// const handlePromise = async (cb)=>{
//    data = await myPromise(10)
//    data2 = await myPromise(40)
//    cb(data) 
// //    console.log(data)
// }

// handlePromise((result)=>{
//     console.log(result)
// })


let userApi = async (cb) => {
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts")
        let returnData = await data.json()
        // console.log(returnData)
        cb(returnData)
    }
    catch (e) {
        console.log(e)
    }
}

userApi((result) => {
    console.log(result)

    result.forEach(element => {
        console.log(element)
        let button =  document.createElement('button')
        button.addEventListener('click', ()=>{
            console.log(element.id)
            window.location.href = `single-post.html?postId=${element.id}`
        })
    });

})

function handleRoute(){
    window.location.href = "single-post.html?postId=30"
}

console.log(window.location.href)

let url = new URL(window.location.href)

let params = new URLSearchParams(url.search)
console.log(params.get('postId'))



///// All posts ==> https://jsonplaceholder.typicode.com/posts
//// single post ==> https://jsonplaceholder.typicode.com/posts/4