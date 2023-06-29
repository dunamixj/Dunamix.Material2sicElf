const navbarId = "dunamix-navbar";
const headerId = "dunamix-header";
const visibleClass = "bg-dark";

export function initSiteJS() {
  console.log('init to top');
    navbarOnScroll();
    setFabButton();
}

function initLogin() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    
    if (!signUpButton || !signInButton) return;
    signUpButton.addEventListener('click', () =>
    loginContainer.classList.add('right-panel-active'));

    signInButton.addEventListener('click', () =>
    loginContainer.classList.remove('right-panel-active'));
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
    console.log(navbarId);
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
function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const loginContainer = document.getElementById('login-container');
if (loginContainer != null) {
    initLogin();
}
const btnEl = document.getElementById("navbar-fab");
if (btnEl != null) {
    btnEl.addEventListener('click', function () {
        btnEl.parentElement.classList.toggle('open');
    });
}
initSiteJS();


