const { Shape, createShape, colorShape } = require('./shape')
describe('color testing', function () {
    it(`should call createShape's createShape method `, function () {
        let shape = new Shape(5, 10, 20)
        let create = new createShape(shape)
        let color = new colorShape(create)
        console.log(create)
        console.log(color)
        spyOn(create, 'createShape').and.returnValue('5 10 20')
        expect(color.createShape()).toMatch("5 10 20")
    })
})