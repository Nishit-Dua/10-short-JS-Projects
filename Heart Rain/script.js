function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = Math.random() * 100 + 'vw'
    heart.style.animationDuration = Math.random() * 4 + 1 + 's';

    heart.innerText = '💓';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5500);
}

setInterval(createHeart, 200);