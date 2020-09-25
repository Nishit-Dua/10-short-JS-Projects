const hamburger = document.querySelector('.hamburger');
const list = document.querySelector('.list');

hamburger.addEventListener('click', () => {
    list.classList.toggle('active');
    hamburger.classList.toggle('active');
})