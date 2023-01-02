
let count = 0; 
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.textContent = count
}

// function reset() {
//     count = 0 
//     saveEl = " "
//     countEl.textContent = count
//     saveEl.textContent = saveEl
// }

function save() {  
    let countStr = count + " - " 
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0 
}


let  firstName = "Kaz"
let lastName = "Kazuki"
let fullName = lastName  + " " + firstName
console.log(fullName);

// practice variable 

let name = "Kaz"
let greeting = "Welcome"

// practice function 

function greetUser() {
    console.log("Hi there " + name + ", " + greeting + "!!")
}

greetUser()


// practice increment & decrement  

let myPoints = 3

function add3Points() {
    myPoints += 3
}


function remove1Point() {
    myPoints -= 1
} 


add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()



console.log(myPoints)


// practice error message  
let errorMsg = document.getElementById("error")
function error() {
    console.log("Something went wrong, please try again")

    errorMsg.textContent = "Something went wrong, please try again"
} 