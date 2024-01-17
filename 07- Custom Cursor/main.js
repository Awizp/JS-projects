const cursor = document.querySelector(".cursor")

function mouseMove(pageX, pageY) {
    cursor.style.left = pageX + "px"
    cursor.style.top = pageY + "px"
}

document.addEventListener("mousemove", (e) => {
    mouseMove(e.pageX, e.pageY)
})
