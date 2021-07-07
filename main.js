
let goDark = false;

const colorChanger = document.querySelector('.change--js');

colorChanger.addEventListener('click', () => {
    if (goDark) {
        document.documentElement.style.setProperty('--normal-mode', '#FFF');
        document.documentElement.style.setProperty('--text-color', '#2d2241');
        goDark = false;
    } else {
        document.documentElement.style.setProperty('--normal-mode', '#2d2241');
        document.documentElement.style.setProperty('--text-color', '#FFF');
        goDark = true;
    }
})