const btnDark = document.querySelector("#dark-toggle");
const btnContrast = document.querySelector("#contrast-toggle");
const btnComplex = document.querySelector("#complexity-toggle");
const btnFonts = document.querySelector("#font-toggle");
const iconMoon = document.querySelector("#moon");
const iconSun = document.querySelector("#sun");
const btnAnimation = document.querySelector("#animation-toggle");

const cookies = { 'darkmode': [btnDark, 'data-theme'], 'contrast': [btnContrast, 'high-contrast'], 'motion': [btnAnimation, 'motion'], 'complexity': [btnComplex, 'complexity'], 'special-fonts': [btnFonts, 'special-font'] };
const systemPreferences = { 'darkmode': '(prefers-color-scheme: dark)', 'contrast': '(prefers-contrast: high)', 'motion': '(prefers-reduced-motion: reduce)' };
const defaultOn = ['motion', 'complexity', 'special-fonts'];

function saveSettingPreference(cookieName) {
    localStorage.setItem(cookieName, cookies[cookieName][0].querySelector('input').checked);
}

function loadPreference(cookieName) {
    const savedPreference = localStorage.getItem(cookieName);

    if (savedPreference != undefined) {
        cookies[cookieName][0].querySelector('input').checked = savedPreference // Apply the saved setting
    } else if (systemPreferences[cookieName] != undefined) { //if no setting, check if eligible for system preferences
        if (window.matchMedia(matchMedia) === true) { //if system preference is true, apply
            cookies[cookieName][0].querySelector('input').checked = true;
        }
    } else {
        defaultOn.forEach(defaultCookie => {
            cookies[defaultCookie][0].querySelector('input').checked = true;
        });
    }
    if (cookieName === 'darkmode') {
        setTheme(cookies[cookieName][0].querySelector('input').checked)
    } else {
        setPreference(cookieName);
    }
};

function setTheme(isDark) {
    // Clear all custom classes and attributes
    document.documentElement.removeAttribute('data-theme');
    iconSun.classList.remove("hide");
    iconMoon.classList.add("hide");
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        iconSun.classList.add("hide");
        iconMoon.classList.remove("hide");
    }
};

function setPreference(cookieName) {
    document.documentElement.classList.remove(cookies[cookieName][1]);
    if (cookies[cookieName][0].querySelector('input').checked) {
        document.documentElement.classList.add(cookies[cookieName][1]);
    }
};

function handleToggleChange(cookieName) {
    setPreference(cookieName);
    saveSettingPreference(cookieName);
}

document.addEventListener("DOMContentLoaded", function () {
    Object.keys(cookies).forEach((key) => {
        loadPreference(key);
    });
});

btnDark.addEventListener('change', () => {
    setTheme(btnDark.querySelector('input').checked);
    saveSettingPreference('darkmode');
});
btnContrast.addEventListener('change', () => {
    handleToggleChange('contrast');
});
btnFonts.addEventListener("change", function () {
    handleToggleChange('special-fonts');
});
btnComplex.addEventListener("change", function () {
    handleToggleChange('complexity');
    let elementsToHide = [...document.getElementsByClassName("corner"), ...document.getElementsByClassName("side"), ...document.getElementsByClassName("icon"), ...document.getElementsByClassName("layout-image")];
    for (const element of elementsToHide) {
        element.classList.toggle("hide");
    }
    let elementsToOverride = [...document.getElementsByClassName("darkmode-icon")]
    for (const element of elementsToOverride) {
        element.classList.toggle("hide-override");
    }

    let elementsToChange = document.getElementsByClassName("disclaimer");
    for (const element of elementsToChange) {
        element.classList.toggle("reduce-complexity");
    }
    document.body.removeAttribute("style");
    document.body.setAttribute("style", "background-image: none");
});
btnAnimation.addEventListener("change", function () {
    handleToggleChange('motion');
    let imgAnimated = [...document.getElementsByClassName("animated")];
    for (const element of imgAnimated) {
        var ogSrc = element.getAttribute("src")
        if (localStorage.getItem("motion")) {
            element.setAttribute("src", ogSrc.split(".")[0] + "_static." + ogSrc.split(".")[1]);
        } else {
            element.setAttribute("src", ogSrc.replace("_static", ""));
        }
    }
});