const btnDark = document.querySelector("#dark-toggle");
const btnContrast = document.querySelector("#contrast-toggle");
const btnComplex = document.querySelector("#complexity-toggle");
const btnFonts = document.querySelector("#font-toggle");
const btnAnimation = document.querySelector("#animation-toggle");
const btnDyslexia = document.querySelector("#dyslexia-toggle");

const cookies = { 'darkmode': [btnDark, 'data-theme'], 'contrast': [btnContrast, 'high-contrast'], 'motion': [btnAnimation, 'motion'], 'complexity': [btnComplex, 'complexity'], 'special-fonts': [btnFonts, 'special-font'], 'dyslexia': [btnDyslexia, 'dyslexic-font'] };
const systemPreferences = { 'darkmode': '(prefers-color-scheme: dark)', 'contrast': '(prefers-contrast: high)', 'motion': '(prefers-reduced-motion: reduce)' };
const defaultOn = ['motion', 'complexity', 'special-fonts'];

const elementsToChange = [...document.getElementsByClassName("disclaimer")];
const darkModeIcons = [...document.getElementsByClassName("darkmode-icon")];
const elementsToHide = [...document.getElementsByClassName("corner"), ...document.getElementsByClassName("side"), ...document.getElementsByClassName("icon"), ...document.getElementsByClassName("layout-image")];

function saveSettingPreference(cookieName) {
    localStorage.setItem(cookieName, cookies[cookieName][0].querySelector('input').checked);
}

function loadPreference(cookieName) {
    let savedPreference = (localStorage.getItem(cookieName) === 'true');
    if (localStorage.getItem(cookieName) != null) {
        cookies[cookieName][0].querySelector('input').checked = savedPreference;
    } else if (cookieName in systemPreferences) { //if no setting, check if eligible for system preferences
        if (window.matchMedia(systemPreferences[cookieName]).matches === true) { //if system preference is true, apply
            cookies[cookieName][0].querySelector('input').checked = true
        }
    }
    triggerEvent(cookies[cookieName][0], 'change');
};

function setTheme(isDark) {

    document.documentElement.removeAttribute('data-theme');
    darkModeIcons.forEach(element => {
        console.log(element)
        element.classList.toggle("hide-toggle");
        console.log(element)
    });
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
};

function setPreference(cookieName) {
    document.documentElement.classList.remove(cookies[cookieName][1]);
    if (cookies[cookieName][0].querySelector('input').checked) {
        document.documentElement.classList.add(cookies[cookieName][1]);
    }
};

function handleSimpleToggleChange(cookieName) {
    setPreference(cookieName);
    saveSettingPreference(cookieName);
}

function triggerEvent(element, eventName) {
    var event = new Event(eventName);
    element.dispatchEvent(event);
}

document.addEventListener("DOMContentLoaded", function () {
    defaultOn.forEach(defaultCookie => {
        cookies[defaultCookie][0].querySelector('input').checked = true;
    });
    Object.keys(cookies).forEach((key) => {
        loadPreference(key);
    });
});

btnDark.addEventListener('change', () => {
    setTheme(btnDark.querySelector('input').checked);
    saveSettingPreference('darkmode');
});
btnContrast.addEventListener('change', () => {
    handleSimpleToggleChange('contrast');
});
btnFonts.addEventListener("change", function () {
    handleSimpleToggleChange('special-fonts');
});
btnComplex.addEventListener("change", function () {
    handleSimpleToggleChange('complexity');

    let currentStatus = !(localStorage.getItem('complexity') === 'true');
    elementsToHide.forEach(element => {
        element.classList.toggle("hide", currentStatus);
    });
    // elementsToOverride.forEach(element => {
    //     element.classList.toggle("hide-override", currentStatus);
    // });
    elementsToChange.forEach(element => {
        element.classList.toggle("reduce-complexity", currentStatus);
    });

    if (!currentStatus) {
        console.log(currentStatus);
        document.body.removeAttribute("style");
    } else {
        document.body.style.cssText = "background-image: none";
    }
});
btnAnimation.addEventListener("change", function () {
    handleSimpleToggleChange('motion');
    let imgAnimated = [...document.getElementsByClassName("animated")];
    for (const element of imgAnimated) {
        var ogSrc = element.getAttribute("src")
        if (!(localStorage.getItem("motion") === 'true')) {
            element.setAttribute("src", ogSrc.split(".")[0] + "_static." + ogSrc.split(".")[1]);
        } else {
            element.setAttribute("src", ogSrc.replace("_static", ""));
        }
    }
});
btnDyslexia.addEventListener("change", function () {
    handleSimpleToggleChange('dyslexia');
});