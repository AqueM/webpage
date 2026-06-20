const btnDark = document.querySelector(".dark-toggle");
const btnContrast = document.querySelector(".contrast-toggle");
const btnComplex = document.querySelector(".complexity-toggle");
const btnFont = document.querySelector(".font-toggle");

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const prefersHighContrast = window.matchMedia("(prefers-contrast: high)").matches;

document.addEventListener("DOMContentLoaded", function () {
    if (prefersDarkScheme) {
        btnDark.querySelector('input').checked = true;
    }
    if (prefersHighContrast) {
        btnContrast.querySelector('input').checked = true;
    }
});

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.body.classList.add("dark-theme");
}

// btn.addEventListener("click", function () {
//   document.body.classList.toggle("dark-theme");

//   let theme = "light";
//   if (document.body.classList.contains("dark-theme")) {
//     theme = "dark";
//   }
//   localStorage.setItem("theme", theme);
// });


btnDark.addEventListener("change", function () {
    let elementsToHide = [...document.getElementsByClassName("moon"), ...document.getElementsByClassName("sun")];
    // If the OS is set to dark mode...
    if (prefersDarkScheme) {
        // ...then apply the .light-theme class to override those styles
        document.body.classList.toggle("light-mode");
        document.documentElement.classList.toggle("light-mode");
        // Otherwise...
    } else {
        // ...apply the .dark-theme class to override the default light styles
        document.body.classList.toggle("dark-mode");
        document.documentElement.classList.toggle("dark-mode");
    };

    for (const element of elementsToHide) {
        element.classList.toggle("hide");
    }
});

btnContrast.addEventListener("change", function () {
    // If the OS is set to dark mode...
    if (prefersHighContrast) {
        // ...then apply the .light-theme class to override those styles
        document.body.classList.toggle("normal-contrast");
        document.documentElement.classList.toggle("normal-contrast");
        // Otherwise...
    } else {
        // ...apply the .dark-theme class to override the default light styles
        document.body.classList.toggle("contrast");
        document.documentElement.classList.toggle("contrast");
    };
});

btnComplex.addEventListener("change", function () {
    let elementsToHide = [...document.getElementsByClassName("corner"), ...document.getElementsByClassName("side"), ...document.getElementsByClassName("icon"), ...document.getElementsByClassName("layout-image")];
    for (const element of elementsToHide) {
        element.classList.toggle("hide");
    }

    let elementsToChange = document.getElementsByClassName("disclaimer");
    for (const element of elementsToChange) {
        element.classList.toggle("reduce-complexity");
    }
    if (document.body.getAttribute("style") !== 'null') {
        document.body.setAttribute("style", "background-image: none");
    } else {
        document.body.removeAttribute("style");
    }
});

btnFont.addEventListener("change", function () {
    document.body.classList.toggle("normal-font");
    document.documentElement.classList.toggle("normal-font");
});