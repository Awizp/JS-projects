const openBtn = document.querySelector(".openVideo")
const closeBtn = document.querySelector(".closeVideo")
const videoContainer = document.querySelector(".videoContainer")
const video = document.querySelector(".video")

openBtn.addEventListener("click", () => {
    videoContainer.classList.remove("hide")
    video.play()
})

closeBtn.addEventListener("click", () => {
    videoContainer.classList.add("hide")
    video.pause()
    video.currentTime = 0
})