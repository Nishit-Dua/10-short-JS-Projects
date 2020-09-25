const target = document.querySelector('.text')
const text = "Apples are much superior to mangos !  ";
let index = 0;

console.log(target)

function write(text) {
    target.innerText = text.slice(0, index);

    index++;
    if (index >= text.length) index = 0;
}

setInterval(write, 100, text)
// write(text)