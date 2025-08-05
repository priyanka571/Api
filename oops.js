//object literals

const user = {
    username:"hitesh",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        console.log(`username: ${this.username}`)
        console.log(this)   //this print the current object
    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);   //this is global and it only gives empty paranthesis






function User(username,loginCount,isLog){
    this.username=username;
    this.loginCount=loginCount;
    this.isLog=isLog


    return this
}



// new keyword is used to give new instance on every call 
//otherwise it will update the last value to new updtaed value
const userOne = new User("hitesh",12,true)
const userTwo = new User("Chai",22,false)

console.log(userOne)
console.log(userTwo)

