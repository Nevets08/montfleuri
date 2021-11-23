const menuButton = document.querySelector(".mobile-header i");
const menuExpand = document.querySelector(".mobile-header .bg-header-expand")

menuButton.addEventListener('click', () => {
    menuExpand.classList.remove("display-none");
})

const closeMenuButton = document.querySelector(".mobile-header .bg-header-expand i");

closeMenuButton.addEventListener('click', () => {
    menuExpand.classList.add("display-none");
})
