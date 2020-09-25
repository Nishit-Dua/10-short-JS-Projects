const image = document.querySelector('.image');
const container = document.querySelector('.image-container');

container.addEventListener('mousemove', e => {
    const x = e.layerX;
    const y = e.layerY;

    image.style.transformOrigin = `${x}px ${y}px`
    image.style.scale = 2;
})

container.addEventListener('mouseleave', () => {
    image.style.transformOrigin = `center center`
    image.style.scale = 1;
})