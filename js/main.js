let icon = document.querySelector(".icon");
let menu = document.querySelector(".menu");
console.log(icon)
console.log(menu)
icon.onclick = () => {
    menu.classList.toggle("active");
}