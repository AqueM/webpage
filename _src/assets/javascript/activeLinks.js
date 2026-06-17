document.addEventListener("DOMContentLoaded", function () {
    
    const menuLinks = document.querySelectorAll('.menu-item');
    console.log(menuLinks);
    menuLinks.forEach((li) => {
        const a = li.querySelector('a');
        // if (!a) return;
        console.log('cont');
        const href = a.getAttribute('href');

        // --- OPCJA A: exact match ---
        // Aktywuje tylko gdy URL === href
        // /folder/subfolder2/subfolderB NIE aktywuje /folder/subfolder2
        const isActive = currentPath === href;

        // --- OPCJA B: prefix match (zakomentuj A i odkomentuj B) ---
        // Aktywuje gdy URL zaczyna się od href
        // /folder/subfolder2/subfolderB AKTYWUJE /folder/subfolder2
        // const isActive = currentPath === href || currentPath.startsWith(href + '/');
        console.log(href);
        if (isActive) {
            console.log('yes');
            li.classList.add('active');
        }
    })
}
);