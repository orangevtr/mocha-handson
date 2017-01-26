var chai = require('chai')
    , should = chai.should();
var divided = require('../lib/divided');

describe('divided', function() {
    describe('#calculate', function() {
        it('should return 2 when the value is 4', function() {
            divided.calculate(4).should.equal(2);
        });
    });
});
