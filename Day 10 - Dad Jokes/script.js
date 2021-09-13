const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

//USING .then()

// function generateJoke() {
//     // fetch('https://icanhazdadjoke.com', {
//     //     headers: {
//     //         'Accept': 'application/json'
//     //     }
//     // });

//     // or

//     const config = {
//         headers: {
//             Accept: 'application/json'
//         },
//     };
//     fetch('https://icanhazdadjoke.com', config)
//         .then(res => res.json())
//         .then(data => {
//             jokeEl.innerHTML = data.joke;
//         });
// };

// or

// USING ASYNC/AWAIT

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        },
    };
    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();
    jokeEl.innerHTML = data.joke;
};
