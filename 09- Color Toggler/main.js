let toggler = document.getElementById("switch");

toggler.addEventListener("click", () => {

    toggler.checked === true
        ? (document.body.style.backgroundColor = "#020D19")
        : (document.body.style.backgroundColor = "#FFF");
});