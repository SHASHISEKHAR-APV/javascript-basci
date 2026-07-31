//singleton 
// Object.create()

// object literals
const mySym= Symbol("key1")

const JsUser={
    name:"shashi",
    age:21,
    [mySym]:"myKey1", // this is the foramt to take the input of symbol inside the object in key value pair
    location:"Bihar",
    email: "Google@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Sunday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym])

JsUser.email= "chat@gmail.com"
// Object.freeze(JsUser)
JsUser.email= "gool@gmail.com"
console.log(JsUser)

JsUser.greeting= function(){
    console.log("Hello Shashi Shekhar")

}
console.log(JsUser.greeting())

JsUser.greetingTwo= function(){
    console.log(`Hello Shekhar,${this.name}`)

}
console.log(JsUser.greetingTwo())
