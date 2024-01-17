const typeText = document.querySelector(".text")

let typingDelay = 200
let eraseDelay = 200
let index = 0
let charIndex = 0
let newLetterDelay = 2000

const words = ["Awesome", "Cool", "Life", "Wierd", "Fun", "Sad"]

function type() {
    if (charIndex < words[index].length) {
        typeText.textContent += words[index].charAt(charIndex)
        charIndex++
        setTimeout(type, typingDelay)
    }
    else {
        setTimeout(erase, newLetterDelay)
    }
}

function erase() {
    if (charIndex > 0) {
        typeText.textContent = words[index].substring(0, charIndex - 1)
        charIndex--
        setTimeout(erase, eraseDelay)
    }
    else {
        index++
        if (index >= words.length) {
            index = 0
        }
        setTimeout(type, typingDelay + 1100)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (words.length) {
        setTimeout(type, newLetterDelay)
    }
})