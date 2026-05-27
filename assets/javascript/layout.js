// original code by: https://petrapixel.neocities.org/coding/layout-base-code

// initLayout() is called once the DOM (the HTML content of your website) has been loaded.
document.addEventListener("DOMContentLoaded", function () {
    // The layout will be loaded on all pages that do NOT have the "no-layout" class in the <body> element.
    if (!document.body.classList.contains("no-layout")) {

        if (headWrapper) { addElement(headerFile, headWrapper); };
        if (footerWrapper) { addElement(footerFile, footerWrapper); };
        if (navWrapper) { addElement(navFile, navWrapper); };
    }
    initActiveLinks();
}
);
const headWrapper = document.querySelector("header");
const footerWrapper = document.querySelector("footer");
const navWrapper = document.querySelector("nav");
const headerFile = "/assets/templates/header.html";
const footerFile = "/assets/templates/footer.html";
const navFile = "/assets/templates/nav.html";

/* ********************************* */

/**
 *  F U N C T I O N S
 */

function initActiveLinks() {
    // This function adds the class "active" to any link that links to the current page.
    // This is helpful for styling the active menu item.

    const pathname = window.location.pathname;
    [...document.querySelectorAll("a")].forEach((el) => {
        const elHref = el
            .getAttribute("href")
            .replace(".html", "")
            .replace("/public", "");

        if (pathname == "/") {
            // homepage
            if (elHref == "/" || elHref == "/index.html") el.classList.add("active");
        } else {
            // other pages
            if (window.location.href.includes(elHref)) el.classList.add("active");
        }
    });
}

function addElement(elementPath, wrapperElement) {
    fetch(elementPath)
        .then(response => {
            // Check if the request was successful (status 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Parse response as text
            return response.text();
        })
        .then(textData => {
            // Store text in a variable
            const html = textData;
            console.log('Layout file loaded');
            // Use the data (e.g., display in console or DOM)
            wrapperElement.insertAdjacentHTML("afterbegin", html);

        })
        .catch(error => {
            console.error('Error loading layout file:', error);
        });
}