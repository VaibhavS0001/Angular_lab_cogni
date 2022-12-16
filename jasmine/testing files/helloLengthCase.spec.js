const { helloWorld, length, UCase, alternateCap, isEven, isPrime } = require('./helloLengthCase')

describe('test for', function () {

    it('hello world function should return Hello World', function () {
        expect(helloWorld()).toMatch('Hello World')
    })

    it('String Length function should return 5', function () {
        expect(length("12342")).toEqual(5)
    })

    // it("function length(nonStr) should throw Error", function () {
    //     expect(length(123444)).toThrow();
    // })

    it('To upperCase function should return HELLO', function () {
        expect(UCase('hello')).toMatch('HELLO')
    })

    it("function alternateCap() should return alternate uppercase", function () {
        expect(alternateCap("yes")).toEqual("yEs");
    })

    it("function isEven(num) should check if number is even", function () {
        expect(isEven(4)).toBeTruthy();
    });

    it("function isEven(num) should check if number is even", function () {
        expect(isEven(5)).toBeFalsy();
    });

    it("function isPrime(num) should check if number is prime", function () {
        expect(isPrime(4)).toBeFalsy();
    });

    it("function isPrime(num) should check if number is prime", function () {
        expect(isPrime(13)).toBeTruthy();
    });

})