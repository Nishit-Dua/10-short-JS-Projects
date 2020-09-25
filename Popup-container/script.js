const close_button = document.querySelector('.close');
const button = document.querySelector('.button');
const popup = document.querySelector('.pop-up');
const body = document.querySelector('body')

close_button.addEventListener('click', () => {
    popup.classList.toggle('active');
    body.classList.toggle('active')
})

button.addEventListener('click', () => {
    popup.classList.toggle('active');
    body.classList.toggle('active')
})