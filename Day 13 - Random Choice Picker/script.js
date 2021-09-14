const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);
});

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
};

textarea.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        setTimeout(() => {
            event.target.value = '';
        }, 10);

        randomSelect();
    }
});

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
};

function randomSelect() {
    const freq = 30, int = 100;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
        setTimeout(() => {
            unHighlightTag(randomTag)
        }, int);
    }, int);

    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, int);
    }, int * freq);

};

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
};

function highlightTag(tag) {
    tag.classList.add('highlighted');
};

function unHighlightTag(tag) {
    tag.classList.remove('highlighted');
};