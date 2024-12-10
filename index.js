window.addEventListener('scroll', function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        document.body.style.backgroundColor = '#946B54';
    } else {
        document.body.style.backgroundColor = '#946B54';
    }
});


//анимация
const arrow = document.querySelector('.arrow img');

let position = 0;
let direction = 1;
const amplitude = 5;
const speed = 0.2;

function animate() {
    position += direction * speed;

    if (position >= amplitude || position <= -amplitude) {
        direction *= -1;
    }

    arrow.style.transform = `translateY(${position}px)`;

    requestAnimationFrame(animate);
}

animate();

//анимация появления элементов на странице

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));
