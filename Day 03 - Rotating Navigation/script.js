const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');

const divCont = document.querySelector('.container');

openButton.addEventListener('click', () => {
    divCont.classList.add('show-nav');
});

closeButton.addEventListener('click', () => {
    divCont.classList.remove('show-nav');
});