let btn2 = document.getElementById('btn2')
btn2.addEventListener('click', async () => {
    let _post = {
        userId: "1",
        title: 'Some random Title',
        body: 'data1'
    }
    await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(_post),
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })

        let postdata2 = {
            userId: "2",
            title: "Title1",
            body: "data2"
        } 
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: "POST",
                body: JSON.stringify(postdata2),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            });

            let data = await response.json();
            console.log(data);
        }
        catch (err) { console.log(err); }

})