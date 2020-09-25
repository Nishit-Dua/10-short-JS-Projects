const button = document.querySelector('button');

button.addEventListener('click', () => {
    document.body.style.background = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`
})