document.getElementById('btn').addEventListener('click', event => {
    if (event.altKey && event.ctrlKey){
        console.log("Hello world")
    }
})