const switcher = document.querySelector(".mode-switcher-btn");
const body = document.querySelector("body");
const bottomImg = document.querySelector(".footer").querySelector("img");
const loader = document.querySelector(".loader");

// get website mode
const siteMode = localStorage.getItem("mode");

// loader
window.addEventListener("DOMContentLoaded", () => {
    loader.classList.add("none");
    loader.style.opacity = 0;
});

// set website mode
if (siteMode === "dark") {
    body.classList.add("dark");
    bottomImg.src = "./assets/img/Vectors-Dark.svg";
}

// toggler function
switcher.addEventListener("click", () => {
    if (!body.classList.contains("dark")) {
        body.classList.add("dark");
        localStorage.setItem("mode", "dark");
    } else {
        body.classList.remove("dark");
        localStorage.setItem("mode", "light");
    }
    bottomImg.style.opacity = 0;
    setTimeout(() => {
        if (body.classList.contains("dark")) {
            bottomImg.src = "./assets/img/Vectors-Dark.svg";
        } else {
            bottomImg.src = "./assets/img/Vectors-Light.svg";
        }
        bottomImg.style.opacity = 1;
    }, 1);
});
