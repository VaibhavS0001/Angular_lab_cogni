const { A, B } = require('./spy');

describe('B has some functionality to be tested', function () {
    it("should call getDetails by spying A's getDetails()", function () {
        let a = new A(11, 'vaibhav');
        let b = new B(a);
        spyOn(a, 'getDetails').and.returnValue("11 vaibhav");
        expect(b.getDetails()).toEqual("11 vaibhav");
    })
})