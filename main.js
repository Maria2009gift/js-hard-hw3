
const btn = document.querySelector(".btn-load")
const images = document.querySelectorAll(".blur-up")

btn.addEventListener("click", ()=> {
    for (const i of images) {
        i.classList.add("lazyload")
    }

})




