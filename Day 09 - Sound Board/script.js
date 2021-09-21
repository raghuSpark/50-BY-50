const sounds = ['jersey', 'krish_emo', 'krishna_maha', 'mahabharat', 'radha_krishna'];

var prevSound = null;

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        const currSound = document.getElementById(sound);
        if (prevSound !== currSound && prevSound !== null) {
            prevSound.pause();
            prevSound.currentTime = 0;
        }
        if (prevSound === currSound) {
            if (currSound.paused) currSound.play();
            else currSound.pause();
        } else {
            prevSound = currSound;
            prevSound.play();
        }
    });

    document.getElementById('buttons')
        .appendChild(btn);
});