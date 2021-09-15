

let assert = require("assert");
let regCheck = require("../regCheck");

describe('regCheck' , function(){
    it('should check if the regNumber of MP' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'MP') ,false);

    });

    it('it should check if the regNumber is from GP' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'), true); 

    });

});
