
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.right ul');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
});


document.addEventListener('click', function(event) {
    const navMenu = document.querySelector('.right ul');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove('show');
    }
});
