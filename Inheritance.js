const User={
    name: "chai",
    email:"p@gmail.com"
}

const Teacher = {
    makeVideo:true
}

const TeachingSupport={
    isAvailable :false
}

const TASupport = {
    makeAssignment:"js Assignment",
    fullTime: true,
    __proto__:TeachingSupport
}
Teacher.__proto__=User


//Modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)
let anotherUser = "chai     "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
    
    
    
}
anotherUser.trueLength()
"hitesh".trueLength()