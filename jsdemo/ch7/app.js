const input = document.querySelector('input');

input.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        show(event)
    } else {
        console.log(event.key)
    }
});

function show(e) {
    console.log(e.target.value)
}