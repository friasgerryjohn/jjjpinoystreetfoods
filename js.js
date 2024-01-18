document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.querySelector('.menu-toggle');
    var navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function () {
        body.classList.toggle('menu-show');
        body.classList.toggle('menu-open');
    });
});
