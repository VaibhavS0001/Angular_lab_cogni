class Shape {
    constructor(numberOfSides, length, breadth) {
        this.numberOfSides = numberOfSides
        this.length = length
        this.breadth = breadth
    }
}

class createShape{
    constructor(shape){
        this.shape = shape
    }

    createShape(shape){
        // return shape
        return null
    }
}

class colorShape{
    constructor(cs){
        this.cs = cs
    }
    createShape(){
        return this.cs.createShape()
    }
}

module.exports = {Shape, colorShape, createShape}