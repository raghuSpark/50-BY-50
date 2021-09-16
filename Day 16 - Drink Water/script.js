const smallCups = document.querySelectorAll('.cup-small');
const litres = document.getElementById('litres');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        if (idx == 0 && smallCups[idx].classList.contains('full') && !smallCups[1].classList.contains('full')) {
            smallCups[idx].classList.remove('full')
        } else {
            smallCups.forEach((_cup, _idx) => {
                if (_idx <= idx) {
                    if (!smallCups[idx].classList.contains('full')) _cup.classList.add('full');
                } else {
                    if (smallCups[idx].classList.contains('full')) _cup.classList.remove('full');
                }
            });
        }
        updateBigCup();
    });
});

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    if (fullCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        litres.innerText = `${2 - 250 * fullCups / 1000}L`
    }
}