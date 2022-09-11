const header = document.querySelector("header");
const nav = document.querySelector("nav");
const mask = document.querySelector(".mask");

nav.onclick = () => {
    header.classList.toggle("cover")
};
mask.onclick = () => {
    header.classList.toggle("cover")
};