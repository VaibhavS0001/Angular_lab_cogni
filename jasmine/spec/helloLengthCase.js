const helloWorld = () => {
    return "Hello World"
}

const length = (str) => {
    if (typeof str != "string") {
        throw new Error("Enter a String")
    } else {
        return str.length
    }
}

const UCase = (str) => {
    return str.toUpperCase()
}

const alternateCap = (str) => {
    if (typeof str != "string") {
        throw new Error("Enter a String")
    } else {
        let s = str.split("")
        for (let i = 1; i < s.length; i += 2) {
            s[i] = s[i].toUpperCase()
        }
        let st = s.join("")
        return st
    }
}

const isEven = (number) => {
    if (number % 2 == 0) {
        return true
    }
}

const isPrime = (number) => {
    let isprime = true;
    if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isprime = false;
                break;
            }
        }
        return isprime
    }
}

module.exports = { helloWorld, length, UCase, alternateCap, isEven, isPrime }