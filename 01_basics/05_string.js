const name = "shashi shekhar"
const repoCount = 3

console.log(name + repoCount + "Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String ("shashi-shekhar")

console.log(gameName[0]);
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())  // original value is not changed it will remain as shashhishekhar

console.log(gameName.charAt(2))
console.log(gameName.indexOf('a'))

const newString = gameName.substring(0,4)
console.log(newString);

// const anotherString = gameName.slice(-8, 4);
// console.log(anotherString)

const newStringOne = "  shashi  "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://shashishekhar-apv1924"

console.log(url.replace('1924', '031924'))
console.log(url.includes("shashi"))

console.log(gameName.split('-'));






