/**
 * Created by ABennett on 3/30/17.
 */

var Stack = require("../js/stack");

describe('Stack', function () {
    var stack;

    forEach(function () {
        stack = new Stack();
    })
    describe('push', function () {
        it("should increase the size of the stack by 1", function(){
            stack.push("string");
            expect(stack.size()).toBe(1);
        })
        it("the last element should be at the top of the stack", function () {
            var orange = "orange";
            stack.push('strawberry');
            stack.push(orange);
            expect(stack.peek()).toEqual(orange);
        })
    })
    describe("pop", function () {
        it("should remove apple from the stack", function () {
        var apple = "apple";
        stack.push(apple);
        stack.push(orange);
        stack.pop();
        expect(stack.peek()).toBe(apple);

        })
    })
    describe("pop", function () {
    it("the stack should be decreased by 1", function () {

        stack.push(apple);
        stack.push(orange);
        stack.pop();
        expect(stack.size()).toBe(2);
    })
  })
})

