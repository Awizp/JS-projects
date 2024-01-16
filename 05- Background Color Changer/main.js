const colorBtn = document.querySelector(".content>button")
const body = document.querySelector("body")
const colorValue = document.querySelector(".content>p")

document.addEventListener("click", () => {
    let letters = '1234567890ABCDEF'
    let hexValue = "#"

    for (let i = 0; i < 6; i++) {
        hexValue += letters[Math.floor((Math.random() * letters.length))]
    }

    body.style.backgroundColor = hexValue
    colorValue.textContent = hexValue
})