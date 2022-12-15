const {greeting, greeting2} = require('./test1');
describe("test1",function(){
    it("should return good morning",function(){
        expect(greeting()).toEqual("good morning");
    })
});

describe("test2",function(){
    it("should return Good Morning",function(){
        expect(greeting2()).toEqual("Good Morning");
    })
});