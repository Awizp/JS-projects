const scrollIndicator = document.querySelector(".progress")

// Calculate the scrolled height in the browser
let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

window.addEventListener("scroll", () => {
    // Get the scrollbar top in the client browser
    let scrollTop = document.documentElement.scrollTop
    let scrolled = (scrollTop / scrollHeight) * 100
    scrollIndicator.style.width = `${scrolled}%`
})