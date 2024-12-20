
var logger = require("../logger.js");
function testLogError() {
    try {
        logger.error('error')
        return true;
    }
    catch {
        return false;
    }

}

function testLogInfo() {
    try {
        logger.info('info')
        return true;
    }
    catch {
        return false;
    }

}

function testLogDebug() {
    try {
        logger.error('debug')
        return true;
    }
    catch {
        return false;
    }

}

var assert = require('assert');
describe('Log', function () {
  describe('#test log', function () {
    it('test error should return true', function () {
        assert.equal(testLogError(), true);
    });
    it('test info should return true', function () {
        assert.equal(testLogInfo(), true);
    });
    it('test debug should return true', function () {
        assert.equal(testLogDebug(), true);
    });
      });
});