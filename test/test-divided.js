var chai = require('chai')
    , should = chai.should();
var divided = require('../lib/divided');
var EventEmitter = require('events').EventEmitter;
require('mocha-sinon');

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

    describe('#read', function() {
        it('should print "result: 4" when the value is 8 that given from the stdin', function(done) {
            var ev = new EventEmitter();
            var _console_log = console.log; // push
            this.sinon.stub(console, 'log'); // console.logをstub化

            process.openStdin = this.sinon.stub().returns(ev); // process.openStdinという関数をevを返すstubにする
            // この形式は使いこなせても良さそう
            divided.read(); // 中でopenStdinが呼ばれる
            ev.emit('data', '8'); // dataイベントで8を送信

            console.log.calledOnce.should.be.true; // 呼ばれたことをtest
            console.log.calledWith('result: 4').should.be.true; // 呼ばれて、'result: 4'になってることをtest

            console.log = _console_log; // pop function
            done();
        });

        it('should print "Type of numeric is expected." when the value is not a numeric', function(done) {
            var ev = new EventEmitter();
            var _console_log = console.log; // push
            this.sinon.stub(console, 'log'); // console.logをstub化

            process.openStdin = this.sinon.stub().returns(ev); // process.openStdinという関数をevを返すstubにする
            divided.read();
            ev.emit('data', 'abc'); // 文字列を入れる

            console.log.calledOnce.should.be.true;
            console.log.calledWithMatch('Type of numeric is expected.').should.be.true;

            console.log = _console_log; // pop function
            done();
        });
    });
});
