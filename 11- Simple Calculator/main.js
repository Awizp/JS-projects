let numbers = document.querySelectorAll("#numbers")
let operators = document.querySelectorAll("#operators")
let equal = document.querySelector("#equal")
let clear = document.querySelector("#clear")
let wipe = document.querySelector(".AC")

// Result area
let result = document.querySelector(".result div")

let toEval

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        let numValue = number.innerHTML
        toEval = result.innerHTML += numValue
        return toEval
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        let operatorValue = operator.innerHTML
        toEval = result.innerHTML += operatorValue
        return toEval
    })
})

equal.addEventListener("click", () => {
    let evalValue = eval(toEval)
    toEval = evalValue
    result.innerHTML = toEval
})

clear.addEventListener("click", () => {
    toEval = String(toEval)
    toEval = toEval.substring(0, toEval.length - 1)
    result.innerHTML = toEval
})

wipe.addEventListener("click", () => {
    toEval = ""
    result.innerHTML = ""
})
