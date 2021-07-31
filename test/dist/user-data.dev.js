"use strict";

var _userData = _interopRequireDefault(require("../lib/user-data"));

var _index = require("../lib/index");

var _assert = _interopRequireDefault(require("assert"));

var _sinon = _interopRequireDefault(require("sinon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('userData', function () {
  it('should be able to grab the verification secret', function () {
    var settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      user_id: 1
    };
    var userData = new _userData["default"](settings);

    _assert["default"].equal(userData.getVerificationSecret(), 'abc123');
  });
  it('should grab the user_id as the identifier', function () {
    var settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      user_id: 1,
      email: 'jess@intercom.io'
    };
    var userData = new _userData["default"](settings);

    var userHash = _sinon["default"].spy(_index.IdentityVerification, 'userHash');

    userData.json();
    userHash.restore();

    _sinon["default"].assert.calledWith(userHash, {
      secretKey: 'abc123',
      identifier: '1'
    });
  });
  it('should grab the email as the identifier if no user_id', function () {
    var settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      email: 'jess@intercom.io'
    };
    var userData = new _userData["default"](settings);

    var userHash = _sinon["default"].spy(_index.IdentityVerification, 'userHash');

    userData.json();
    userHash.restore();

    _sinon["default"].assert.calledWith(userHash, {
      secretKey: 'abc123',
      identifier: 'jess@intercom.io'
    });
  });
  it('should throw an error if there\'s no verification secret', function () {
    var settings = {
      app_id: 'xyz789',
      user_id: 1
    };

    _assert["default"]["throws"](function () {
      return new _userData["default"](settings);
    }, Error);
  });
  it('should error if there\'s no app_id', function () {
    var settings = {
      verificationSecret: 'abc123',
      user_id: 1
    };

    _assert["default"]["throws"](function () {
      return new _userData["default"](settings);
    }, Error);
  });
  it('should return the logged out userData if no identifier', function () {
    var settings = {
      app_id: 'xyz789'
    };
    var userData = new _userData["default"](settings);

    _assert["default"].equal(JSON.stringify(userData.json()), JSON.stringify({
      app_id: 'xyz789'
    }));
  });
  it('should escape bad stuff in values', function () {
    var settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      email: 'jess@"<script>alert(1)</script>intercom.io'
    };
    var userData = new _userData["default"](settings);

    _assert["default"].equal(userData.json().email, 'jess@\\"&lt;script&gt;alert(1)&lt;/script&gt;intercom.io');
  });
  it('should escape bad stuff in object keys', function () {
    var settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      user_id: '1'
    };
    settings['<script>doSomethingEvil();</script>'] = 'jess@"<script>alert(1)</script>intercom.io';
    var userData = new _userData["default"](settings);
    var result = userData.json();

    _assert["default"].equal(result['&lt;script&gt;doSomethingEvil();&lt;/script&gt;'], 'jess@\\\"&lt;script&gt;alert(1)&lt;/script&gt;intercom.io');
  });
  it('should escape bad stuff in next object keys and values', function () {
    var settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      user_id: '1'
    };
    settings.maliciousSettings = {
      '<script>doSomethingEvil();</script>': 'jess@"<script>alert(1)</script>intercom.io'
    };
    var userData = new _userData["default"](settings);
    var result = userData.json();

    _assert["default"].equal(result.maliciousSettings['&lt;script&gt;doSomethingEvil();&lt;/script&gt;'], 'jess@\\"&lt;script&gt;alert(1)&lt;/script&gt;intercom.io');
  });
  it('should not include the verification secret in the userData', function () {
    var settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      user_id: 1,
      email: 'jess@intercom.io',
      name: 'Jess OB',
      company: {
        id: 123,
        name: 'Intercom'
      }
    };
    var userData = new _userData["default"](settings);
    var result = userData.json();

    _assert["default"].equal(Object.keys(result).indexOf(settings.verificationSecret), -1);
  });
  it('should skip setUserHash if user_hash is already defined', function () {
    var settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      user_id: 1
    };
    var userData = new _userData["default"](settings);

    var userHash = _sinon["default"].spy(_index.IdentityVerification, 'userHash');

    userData.json();
    userData.json();
    userHash.restore();

    _sinon["default"].assert.calledOnce(userHash);
  });
  it('should return the userData', function () {
    var settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      user_id: 1,
      email: 'jess@intercom.io',
      name: 'Jess OB',
      company: {
        id: 123,
        name: 'Intercom'
      }
    };
    var userData = new _userData["default"](settings);

    _assert["default"].equal(JSON.stringify(userData.json()), JSON.stringify({
      app_id: 'xyz789',
      user_id: 1,
      email: 'jess@intercom.io',
      name: 'Jess OB',
      company: {
        id: 123,
        name: 'Intercom'
      },
      user_hash: 'f02877f24c9dd37542268a28627ebaf2e07d0d114d9482abcdc20f60874b40b3'
    }));
  });
});