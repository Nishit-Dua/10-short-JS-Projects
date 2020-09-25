const container = document.getElementById('container');
const button = document.querySelector('.button');

button.addEventListener('click', () => {
    const markup = document.createElement('div');
    markup.classList.add('popup');
    markup.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)},100%,50%)`
    markup.innerHTML = "Pop up!"

    container.appendChild(markup)

    setInterval(() => {
        markup.remove()
    }, 1500)
})

console.log(container)