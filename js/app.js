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
const navBars = document.querySelectorAll('[data-nav]');
const navBarList = document.getElementById('navbar__list');
const menuLinks = document.querySelectorAll('.menu__link');
const sections = document.querySelectorAll('section');
let ul = document.getElementById("navbar__list")

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// build the nav
navBars.forEach((individualSection) => {
    let linkText = individualSection.getAttribute("data-nav")
    let li = document.createElement('li')
    li.setAttribute("id", linkText)
    li.addEventListener("click", function () {
        individualSection.scrollIntoView({ behavior: "smooth" })
    })
    let text = document.createTextNode(linkText)
    li.appendChild(text)
    ul.appendChild(li)
})

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// Scroll to anchor ID using scrollTO event
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5;
}
window.addEventListener("scroll", function () {
    const navList = document.querySelectorAll('#navbar__list > li')
    sections.forEach(function (elem) {
        const list = elem.classList;
        if (isInViewport(elem)) {
            list.add('your-active-class')
            navList.forEach(nav => {
                console.log(nav);
                if (nav.id === elem.dataset.nav) {
                    nav.classList.add('active')
                } else {
                    nav.classList.remove('active')
                }
            })
        } else {
            list.remove('your-active-class')
        }
    })
})

/**
 * End Main Functions
 * Begin Events
 */
// Form event ID
const form = document.getElementById('form');
form.addEventListener("submit", function (event) {
    event.preventDefault();
    form.classList.add("submitted-active")
    form.textContent = "thank you for submitting!"
})