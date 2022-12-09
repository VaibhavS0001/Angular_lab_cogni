let btn2 = document.getElementById('btn2')
btn2.addEventListener('click', async() => {
    let _post = {
        userId: 1,
        title: 'Some random Title',
        body: 'Thor',

    }
    await fetch('https://jsonplaceholder.typicode.com/posts',{
        methid: 'POST',
        body: JSON.stringify(_post),
        headers: {'Content-Type': 'application/json; charset=UTF-8'}
    })
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
    })