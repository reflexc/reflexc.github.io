function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = Math.random() * window.innerWidth + 'px';
    document.querySelector('.fireworks-container').appendChild(firework);
    setTimeout(() => {
        firework.remove();
    }, 200);
}

setInterval(createFirework, 500);
