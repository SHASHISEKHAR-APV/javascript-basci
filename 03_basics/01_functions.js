// Here we are going to learn about the functions

function sayMYname(){
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("S")
    console.log("H")
    console.log("I")
}

//sayMYname  => it is only reference
// sayMYname()

//addition of two numbers

// function addTwoNumbers(num1,num2){  //..>here it is called as parameter
//     console.log(num1+num2)
// }
// function addTwoNumbers(num1,num2){  //..>here it is called as parameter
//     let result = num1+num2
//     return result
// }
function addTwoNumbers(num1,num2){  //..>here it is called as parameter
    return num1 + num2
}
const result = addTwoNumbers(3,7)  //..>here it is called as argument
// console.log("Result: ",result)

function loginUserMessage(username){
    return `${username} just logged in`
}
// loginUserMessage("shashi shekhar")
// console.log(loginUserMessage("shashi shekhar"))


// function calcualteCartPrice(num1){
//     return num1
// }
// console.log(calcualteCartPrice(200,400,500))


function calcualteCartPrice(...num1){
    return num1
}
// console.log(calcualteCartPrice(200,400,500))
const user = {
    username:"shashi",
    price:199
}

function handleObject(anyobject){
    console.log(`User is ${anyobject.username} and price is ${anyobject.price}`)

}
// handleObject(user)
handleObject({
    username: "sam",
    price:399
})

const myNewArray = [200,400,600,800]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))

