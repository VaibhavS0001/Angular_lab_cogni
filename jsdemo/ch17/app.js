function check() {
    let input = document.getElementById('textinput')
    console.log(input.value)
    if (input.value.includes('$')) {
        console.log('hi')
        throw new Error
    }
}