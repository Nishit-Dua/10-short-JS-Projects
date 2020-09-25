const button = document.querySelector('.button');

button.addEventListener('click', () => {
    button.classList.toggle('active');
    document.body.classList.toggle('active');
})