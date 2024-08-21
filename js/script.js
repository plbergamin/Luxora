document.getElementById('menu-btn').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
});
