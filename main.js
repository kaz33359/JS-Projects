
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
