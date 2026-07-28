// there are two types of memory
// stack and Heap memory
// stack [primitive], Heap memory [non-primitive]

//stack: me hamesha copy milta hai 
//heap: me hamesha reference milta hai 

let myYoutubeName = "shashi shekhar";

let anotherName = myYoutubeName;
anotherName = "Shekhar";

console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
    email: "shashi@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "apv@gmail.com"
console.log(userTwo.email);
console.log(userTwo.email);





