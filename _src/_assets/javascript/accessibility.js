const btnDark = document.querySelector("#dark-toggle");
const btnContrast = document.querySelector("#contrast-toggle");
const btnComplex = document.querySelector("#complexity-toggle");
const btnFonts = document.querySelector("#font-toggle");
const btnAnimation = document.querySelector("#animation-toggle");
const btnDyslexia = document.querySelector("#dyslexia-toggle");
const btnFontSize = document.querySelector("#fontsize-toggle");

const cookies = { 'darkmode': [btnDark, 'data-theme'], 'contrast': [btnContrast, 'access--high-contrast'], 'motion': [btnAnimation, 'access--motion'], 'complexity': [btnComplex, 'access--complexity'], 'special-fonts': [btnFonts, 'access--special-font'], 'dyslexia': [btnDyslexia, 'access--dyslexic-font'], 'bigger-text': [btnFontSize, 'access--large-font'] };
const systemPreferences = { 'darkmode': '(prefers-color-scheme: dark)', 'contrast': '(prefers-contrast: high)', 'motion': '(prefers-reduced-motion: reduce)' };
const defaultOn = ['motion', 'complexity', 'special-fonts'];

const darkModeIcons = [...document.getElementsByClassName("darkmode-icon")];

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
        element.classList.toggle("theme--hide-toggled");
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
btnFonts.addEventListener('change', function () {
    handleSimpleToggleChange('special-fonts');
});
btnComplex.addEventListener('change', function () {
    handleSimpleToggleChange('complexity');

    let shouldDisplay = (localStorage.getItem('complexity') === 'true');

    let elementsToHide = [...document.getElementsByClassName("theme__border-square__decor"), ...document.getElementsByClassName("icon"), ...document.getElementsByClassName("layout__image")];
    elementsToHide.forEach(element => {
        element.classList.toggle("theme--hide", !shouldDisplay);
    });

    if (shouldDisplay) {
        document.body.removeAttribute("style");
    } else {
        document.body.style.cssText = "background-image: none";
    }
});
btnAnimation.addEventListener('change', function () {
    handleSimpleToggleChange('motion');
    let shouldDisplayAnimated = (localStorage.getItem('motion') === 'true');
    let layoutImages = [...document.getElementsByClassName("layout__image")];
    let blinkies = [...document.getElementsByClassName("image__blinkie")];
    let imagesFiltered =
        layoutImages.filter(
            item => item.currentStyle || window.getComputedStyle(item, false).backgroundImage.includes("_anim"));
    imagesFiltered.forEach(element => {
        element.classList.toggle("theme--hide-toggled", !shouldDisplayAnimated);
    });
    blinkies.forEach(element => {
        element.classList.toggle("theme--hide-toggled", !shouldDisplayAnimated);
    });
    let imgAnimated = [...document.getElementsByClassName("animated")];
    imgAnimated.forEach(element => {
        var ogSrc = element.getAttribute("src")
        if (!shouldDisplayAnimated) {
            element.setAttribute("src", ogSrc.slice(0, ogSrc.lastIndexOf(".")) + "_static" + ogSrc.slice(ogSrc.lastIndexOf(".")));
        } else {
            element.setAttribute("src", ogSrc.replace("_static", ""));
        }
    });

});
btnDyslexia.addEventListener("change", function () {
    handleSimpleToggleChange('dyslexia');
});
btnFontSize.addEventListener("change", function () {
    handleSimpleToggleChange('bigger-text');
});