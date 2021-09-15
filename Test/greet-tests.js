

let assert = require("assert");
let greet = require("../greet");


describe('The greet fuction' , function(){

    it('should return "Hello, Tebza" when i greet Tebza' , function(){
       
        assert.equal('Hello, Tebza', greet('Tebza'));

    });

    it('should return "Hello, Dineo" when i greet Dineo' , function(){
       
        assert.equal('Hello, Dineo', greet('Dineo'));

    });
});
