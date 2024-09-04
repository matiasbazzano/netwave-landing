function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        document.getElementById('theme-switch').checked = (savedTheme === 'dark-mode');
    } else {
        document.body.classList.add('light-mode');
        document.getElementById('theme-switch').checked = false;
    }
}

function saveTheme(theme) {
    localStorage.setItem('theme', theme);
}

document.getElementById('theme-switch').addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        saveTheme('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        saveTheme('light-mode');
    }
});

document.addEventListener('DOMContentLoaded', loadTheme);
