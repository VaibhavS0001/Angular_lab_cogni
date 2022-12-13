function remove(text) {
    var a = text.split("");
    var res = [];

    for (var i = 0; i < a.length; i++) {
        if (text.indexOf(a[i]) === text.lastIndexOf(a[i]))
            res.push(a[i]);
    }

    return res.join("");
}

console.log(remove("sdvfaskdjfgadskfh"))
console.log(remove("kuaysdtgfakbcjsflasnhflsakfhncsdkugfhncailsnlkf"))