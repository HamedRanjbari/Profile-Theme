let $ = document
let themeBtn = $.querySelectorAll(".theme-btn")

themeBtn.forEach((color) => {
    color.addEventListener("click", (event) => {
        $.documentElement.style.setProperty("--mainTheme", event.target.dataset.color)
    })
})