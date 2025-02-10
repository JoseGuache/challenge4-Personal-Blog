const changeTheme = document.querySelector('#theme');
const container = document.querySelector('body');


let mode = localStorage.getItem('mode') || 'light';


if (mode === 'dark') {
    container.classList.add('dark');
    changeTheme.src = changeTheme.dataset.moon;
} else {
    container.classList.add('light');
    changeTheme.src = changeTheme.dataset.sun;
}

changeTheme.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark';
        container.classList.remove('light');
        container.classList.add('dark');
        changeTheme.src = changeTheme.dataset.moon;
    } else {
        mode = 'light';
        container.classList.remove('dark');
        container.classList.add('light');
        changeTheme.src = changeTheme.dataset.sun;
    }

    localStorage.setItem('mode', mode);
});