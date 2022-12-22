const loadData = async () => {
    let response = await fetch('Student.json')
    let student = await response.json()
    console.log(student)
    console.log("----------------------------------------------------------------")

}

loadData()

postData = async () => {
    let _post = {
        "name": "Amit",
        "city": "Pune",
        "clearedExam": true
    }
    await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(_post),
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log("----------------------------------------------------------------")
        })
        .catch(err => {
            console.log(err)
            console.log("----------------------------------------------------------------")
        })
}

postData()