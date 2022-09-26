/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBars  = document.querySelectorAll('[data-nav]');
const navBarList = document.getElementById('navbar__list');
const menuLinks = document.querySelectorAll('.menu__link');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNav = function(e){
    for (let navBar of navBars) {
        const datasetValue = navBar.dataset.nav;
        const navegationItem = document.createElement('li');
        const navegationAnchor = document.createElement('a');
        navegationAnchor.setAttribute('class', 'menu__link');
        navegationAnchor.setAttribute('href', `#${navBar.id}`);
        navegationAnchor.innerHTML = datasetValue;
        navegationItem.append(navegationAnchor); 
        navBarList.appendChild(navegationItem);
    }
}


// Add class 'active' to section when near top of viewport
const makeActive = function(e){
    for (let navBar of navBars) {
        const box = navBar.getBoundingClientRect();
        if(box.top <= 100 && box.bottom >= 100) { 
            navBar.classList.add('your-active-class');
        } else {
            navBar.classList.remove('your-active-class');
        }
    }
}

// Scroll to anchor ID using scrollTO event
const scrollId = function(e){
    for (let menuLink of menuLinks){
        const navItem = e.target;
        const element = document.querySelector(
            navItem.getAttribute('href')
        );
        scrollBy({
            top: element.getBoundingClientRect().top,
            behavior: 'smooth',
        });
    }
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Submit 
// Build menu 
document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    buildNav();
});

// Scroll to section on link click
document.addEventListener('click', (e) => {
    e.preventDefault();
    scrollId(e);
});

// Set sections as active
document.addEventListener('scroll', (e) => { 
    e.preventDefault();
    makeActive();
});
