function changeContent() {
    window.addEventListener('resize', function () {
        const paragraph = document.querySelector('.advantages');
        if (window.innerWidth >= 1024) {
            paragraph.textContent = 'PDF-файл "5 преимуществ профессии фронтенд разработчика"';
        } else {
            paragraph.textContent = 'PDF-файл "5 преимуществ профессии веб-дизайнера"';
        }
    });

    window.addEventListener('load', function () {
        const paragraph = document.querySelector('.advantages');
        if (window.innerWidth >= 1024) {
            paragraph.textContent = 'PDF-файл "5 преимуществ профессии фронтенд разработчика"';
        }
    });
}

function changeButtonColor() {
    window.addEventListener('resize', function () {
        const btn = document.querySelector('.form__submit');
        if (window.innerWidth >= 1024) {
            btn.style.backgroundColor = '#ff3459';
        } else {
            btn.style.backgroundColor = '#0048FF';
        }
    });
}

function initFunctions() {
    changeContent();
    changeButtonColor();
}

initFunctions();
