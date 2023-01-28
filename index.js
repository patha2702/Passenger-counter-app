
 // initialize the count equals 0
let count = 0

// selecting the count, increment, save button using query selector
const countEl = document.querySelector("#count")
const incrementEl = document.querySelector("#increment-btn")
const saveEl = document.querySelector("#save-btn")
const prevCountEl = document.querySelector("#prev-entries")

// To display the count
// It takes 2 parameters element and count
// element => which element to display
// count => count/ value of the element to be displayed
function displayCount(element,count){
    element.innerText = count
}

// To increment the count
function incrementCount(){
    count += 1
}

// To update the count
// It increments as well as displays the updated count
function updateCount(){
    incrementCount()
    displayCount(countEl, count)
}

function save(){
    let tempStr = prevCountEl.innerText + ` ${count} - `
    displayCount(prevCountEl, tempStr)
    count = 0 
    displayCount(countEl,count)
}

displayCount(countEl, count)




