let getposts = async () => {
    let res = await fetch('post.json')
    let data  = await res.json()
    console.log(data)
}

getposts()