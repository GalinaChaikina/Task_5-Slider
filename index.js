const prev = document.getElementById('btn-left');
const next = document.getElementById('btn-right');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let index = 0;

function activeSlide(i) {
    console.log(i);
    for(let slide of slides) {
        slide.classList.remove('active');
    }
    slides[i].classList.add('active');
}

function activeDot(i) {
    for(let dot of dots) {
        dot.classList.remove('active');
    }
    dots[i].classList.add('active');
    
}

next.addEventListener('click', nextSlide);

function nextSlide() {
    if(index == slides.length - 1) {
        // index = 0;
        activeSlide(index);
        activeDot(index);
    } else {
        index++;
        activeSlide(index);
        activeDot(index);
    }
    
}

prev.addEventListener('click', prevSlide);

function prevSlide() {
    if(index === 0) {
        // index = slides.length - 1;
        activeSlide(index);
        activeDot(index);
    } else {
        index--;
        activeSlide(index);
        activeDot(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        activeSlide(index);
        activeDot(index);
    })
})

// setInterval(nextSlide, 3000);