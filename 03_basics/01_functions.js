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
console.log(loginUserMessage("shashi shekhar"))
