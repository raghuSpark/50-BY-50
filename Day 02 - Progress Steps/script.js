const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const progressBar = document.querySelector('.progress');
const circles = document.querySelectorAll('.circle');

let currentPos = 1;
nextBtn.addEventListener('click', () => {
    if (currentPos < 4) {
        let progress = currentPos * 33.3333;
        currentPos++;
        progressBar.style.width = progress + '%';
        circles[currentPos - 1].classList.add('active');
    }
    enable_or_disable(currentPos);
});

prevBtn.addEventListener('click', () => {
    if (currentPos > 1) {
        currentPos--;
        circles[currentPos].classList.remove('active');
        let progress = (currentPos - 1) * 33.3333;
        progressBar.style.width = progress + '%';
    }
    enable_or_disable(currentPos);
});

function enable_or_disable(currentPos) {
    if (currentPos == 4) nextBtn.disabled = true;
    else nextBtn.disabled = false;
    if (currentPos == 1) prevBtn.disabled = true;
    else prevBtn.disabled = false;
};