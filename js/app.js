

/**
 * Define Global Variables
 */
const sections = document.querySelectorAll('section');
const navbar = document.getElementById('navbar');

/**
 * Build the navigation menu dynamically
 */
function buildNavigation() {
    sections.forEach(section => {
        const navItem = document.createElement('li');
        const anchor = document.createElement('a');
        
        anchor.textContent = section.dataset.nav;
        anchor.href = `#${section.id}`;
        anchor.classList.add('menu__link');

        // Define the click event handler
        const handleClick = (event) => {
            event.preventDefault();
            document.getElementById(section.id).scrollIntoView({
                behavior: 'smooth'
            });
        };
        
        navItem.appendChild(anchor);
        navbar.appendChild(navItem);
    });
}

/**
 * Set active class for current section and link
 * 
 */
function makeActive() {
    let currentSection = null;
    const VALUE = 150;

    sections.forEach(section => {
        const box = section.getBoundingClientRect();

        // Check if the section is in view
        if (box.top <= VALUE && box.bottom >= VALUE) {
            currentSection = section;

            // Set active class on current section
            section.classList.add('active');

            // Find and set active class on corresponding nav link
            const activeLink = document.querySelector(`.menu__link[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        } else {
            // Remove active class from other sections
            section.classList.remove('active'); 
       
            // Remove active class from corresponding nav link
            const inactiveLink = document.querySelector(`.menu__link[href="#${section.id}"]`);
            if (inactiveLink) {
                inactiveLink.classList.remove('active');
            }
        }
        
    });
}

/**
 * Initialize the app
 */
function init() {
    buildNavigation(); // Build menu
    window.addEventListener('scroll', makeActive);
    if (activeLink) {
        activeLink.classList.add('.active');
     } else  {
        inactiveLink.classList.remove('.active');
    }
}

// Start the app on DOM content load
document.addEventListener('DOMContentLoaded', init);