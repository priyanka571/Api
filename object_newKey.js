function multipleBy5(num){
    return num*5
}
multipleBy5.power = 2
console.log(multipleBy5(10));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username,score){
    this.username = username
    this.score = score
}


// here we inject userdefine prototype to createUser which is a function we can also inject in string and array
createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}
//new keyword is mandatory 
const chai = new createUser("chai",20)
const tea = new createUser("tea",25)


chai.printMe()



let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

// here we inject prototype directly to object so that every function,array,string which
//  passes through the object can use that{object is top level hirarchy}


Object.prototype.hitesh = function(){
    console.log(`priyanka is present in all object`);
    
}
heroPower.hitesh() // object uses prototype
myHeros.hitesh()    //array uses prototype

Array.prototype.heyPriyanka = function(){
    console.log(`priyanka say hii`);
    
}

myHeros.heyPriyanka()
// heroPower.heyPriyanka()   //object cannot uses the child prototype
