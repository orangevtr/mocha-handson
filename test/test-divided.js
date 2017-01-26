var chai = require('chai')
    , should = chai.should();
var divided = require('../lib/divided');

describe('divided', function() {
    describe('#calculate', function() {
        it('should return 2 when the value is 4', function() {
            divided.calculate(4).should.equal(2);
//            expect(divided.calculate(4)).to.equal(2);
        });
        it('should return 1 when the value is 3', function() {
            divided.calculate(3).should.equal(1);
        });
        it('should throw exceptions when the value are other than numbers', function() {
            (divided.calculate).should.throw(Error);
            (function() {divided.calculate(null)}).should.throw(Error, 'Type of numeric is expected.');
            (function() {divided.calculate("abc")}).should.throw(Error, / numeric /);
            (function() {divided.calculate([])}).should.throw(Error, /^Type of numeric /);

            //// expect-style sentences:
            // var expect = chai.expect;
            // expect(divided.calculate).to.throw(Error);
            // expect(function() {divided.calculate(null)}).to.throw(Error, 'Type of numeric is expected.');
            // expect(function() {divided.calculate("abc")}).to.throw(Error, / numeric /);
            // expect(function() {divided.calculate([])}).to.throw(Error, /^Type of numeric /);
        });
    });
});
