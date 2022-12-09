let btn = document.getElementById('btn1')
btn.addEventListener('click', async() => {

    fetch('https://jsonplaceholder.typicode.com/todos/5')
        .then(response => response.json())
        .then(data => {
            console.log(data.title)
        })
        .catch(err => {
            console.log(err)
        })


    await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let div = document.getElementById('output')
            data.forEach(d => {
                let p = document.createElement('p')
                p.textContent = d.name
                div.appendChild(p)
            });
        })
        .catch(err => {
            console.log(err)
        })



    // const xhr = new XMLHttpRequest()
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true)
    // xhr.onprogress = () => {
    //     console.log("ready State", xhr.readyState)
    // }
    // xhr.onload = () => {
    //     let div = document.getElementById('output')
    //     console.log(xhr.readyState)
    //     if (xhr.status === 200) {
    //         let data = JSON.parse(xhr.responseText)
    //         data.forEach(d => {
    //             let p = document.createElement('p')
    //             p.textContent = d.name
    //             div.appendChild(p)
    //         });
    //     }
    // }
    // xhr.send()
})