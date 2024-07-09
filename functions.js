const jokeText = document.getElementById('joke')
const button = document.getElementById('generate')

button.addEventListener('click', generateJoke)

generateJoke();

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        },
    }
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()

    jokeText.value = data.joke
}
