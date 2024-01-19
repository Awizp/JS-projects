const arrow = document.querySelector(".arrow")

document.addEventListener("scroll", () => {
    const position = window.scrollY
    if (position <= 5) {
        arrow.classList.toggle("fade-in")
        arrow.classList.toggle("fade-out")
    }
})