
let goDark = false;

const colorChanger = document.querySelector('.change--js');

colorChanger.addEventListener('click', () => {
    if (goDark) {
        document.documentElement.style.setProperty('--normal-mode', '#FFF');
        document.documentElement.style.setProperty('--text-color', '#1a1a1a');
        goDark = false;
    } else {
        document.documentElement.style.setProperty('--normal-mode', '#1a1a1a');
        document.documentElement.style.setProperty('--text-color', '#FFF');
        goDark = true;
    }
})