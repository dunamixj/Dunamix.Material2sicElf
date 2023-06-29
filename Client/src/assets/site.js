
const header = document.getElementById("dunamix-header");
const navbar = document.getElementById("dunamix-navbar")
window.addEventListener('scroll', function () {
    if (window.pageYOffset > header.offsetHeight) {
        navbar.classList.add("navbar-after-scroll")
    } else {
        navbar.classList.remove("navbar-after-scroll")
    }
})
const btnEl = document.getElementById("navbar-fab");
btnEl.addEventListener('click', function () {
  btnEl.parentElement.classList.toggle('open');
});
