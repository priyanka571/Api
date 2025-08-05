//1st way

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task is complete")
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Promise consumed")
})

//2nd way

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
})
.then(function(){
    console.log("Async 2 resolve")
})


//3rd way

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        // we can pass array and object in resolve as a argument
        resolve({
            username:"chai",
            email:"priyanka@gmail.com"
        })
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})


//4rth way

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        //if error is true then we have to handle this error by using the catch block
        if(!error){
            resolve({
                username:"priyanka",
                password:123
            })
        }else{
            reject('ERROR: Something went Wrong')
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>console.log("Finally always execute"))




//5th way

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true
        if(!error){
            resolve({
                username:'JS',
                password:'123'
            })
        }else{
            reject('ERROR')
        }
    },1000)
})

//  this is throwing an error because await always thing that
//  something uis come and we didnot handle the condition in which it  give an error so to handkle we use try catch block


// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response)
// }
// consumePromiseFive()


async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
consumePromiseFive()



// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     }catch(error){
//         console.log("E: ",error)
//     }
// }
// getAllUsers()



fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))