let navbar = document.querySelectorAll(".nav-link"); 
let navCollapse = document.querySelector(".navbar-collapse.collapse");
let toggleImage = document.querySelector("#toggler");
let navToggler = document.querySelector(".navbar-toggler");
let isChanged = false;

navbar.forEach((navItems) =>
{
    navItems.addEventListener("click" , () =>
    {
        navCollapse.classList.remove("show");
        toggleImage.src = "./assets/images/icon-hamburger.svg"
        isChanged = false;
    })
})

navToggler.addEventListener("click" , (click) => 
{
    if(isChanged)
    {
        toggleImage.src = "./assets/images/icon-hamburger.svg"
        isChanged = false;
    }
    else
    {
        toggleImage.src = "./assets/images/icon-close.svg";
        isChanged = true;
    }
})