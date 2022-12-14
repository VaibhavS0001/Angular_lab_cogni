const prime = (n) => {
    let prime = []
    for (let i = 1; i < n; i++) {
        let counter = i > 1
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                counter = false
            }
        }
        if (counter) {
            prime.push(i)
        }
    }
    prime.forEach(element => {
        console.log(element)
    });
}

prime(100)