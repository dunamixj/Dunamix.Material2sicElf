const navbarId = "dunamix-navbar";
const headerId = "dunamix-header";
const loginContainer = document.getElementById('login-container');

function initSiteJS() {
  console.log('init to top');
    navbarOnScroll();
    setFabButton();
}

function setFabButton() {
    const btnEl = document.getElementById("navbar-fab");
    if (btnEl != null) {
        btnEl.addEventListener('click', function () {
            btnEl.parentElement.classList.toggle('open');
        });
    }

}
function navbarOnScroll() {
  document.addEventListener("scroll", swopNavBarClass);
}
function swopNavBarClass() {
    var navBar = document.getElementById(navbarId);
    var _header = document.getElementById(headerId);
    if (!navBar ) return;
    if (!_header) return;
    
    // Todo: unsure why it does body + documentElement...
    const show = document.body.scrollTop > _header.offsetHeight || document.documentElement.scrollTop > _header.offsetHeight;
    if (show) {
        navBar.classList.add("white-glass");
        navBar.classList.add("navbar-light");
        navBar.classList.remove("glass");
        navBar.classList.remove("navbar-dark");
        navBar.classList.remove("text-white");
    }
    else {
        navBar.classList.add("glass");
        navBar.classList.add("navbar-dark");
        navBar.classList.add("text-white");
        navBar.classList.remove("navbar-light");
        navBar.classList.remove("white-glass");   
    }
}
function slideLogin() {
    if (document.getElementById('login-container').classList.contains('right-panel-active')) {
        document.getElementById('login-container').classList.remove('right-panel-active');
    } else {
        document.getElementById('login-container').classList.add('right-panel-active');
    }
}

const btnEl = document.getElementById("navbar-fab");
if (btnEl != null) {
    btnEl.addEventListener('click', function () {
        btnEl.parentElement.classList.toggle('open');
    });
}
initSiteJS();


