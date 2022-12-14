let btn1 = document.getElementById('btn3')
btn1.addEventListener('click', () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'data.txt', true)
    
    xhr.onprogress = () => {
        console.log("ready State",xhr.readyState)
    }

    xhr.onload = () => {
        console.log(xhr.readyState)
        if(xhr.status === 200){
            document.getElementById('output').innerHTML = `
            <h1>${xhr.responseText}</h1>
            `
        }
    }
    xhr.send()
})