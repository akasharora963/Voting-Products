'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/40fe8bbd00db49f980863386af612f14' //infura link
  );
  web3 = new _web2.default(provider);
}
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7OztBQUVQLElBQUksWUFBSjs7QUFFQSxJQUFHLE9BQUEsQUFBTyxXQUFQLEFBQWdCLGVBQWMsT0FBTyxPQUFQLEFBQWMsU0FBL0MsQUFBc0QsYUFBWSxBQUNoRTtTQUFPLEFBQUksa0JBQUssT0FBQSxBQUFPLEtBQXZCLEFBQU8sQUFBcUIsQUFDN0I7QUFGRCxPQUVLLEFBQ0g7TUFBTSxlQUFlLGNBQUEsQUFBSyxVQUFULEFBQW1CLGFBQW5CLEFBQ2YsZ0VBREYsQUFBaUIsQUFDaUQsQUFFbEU7QUFIaUI7U0FHVixBQUFJLGtCQUFYLEFBQU8sQUFBUyxBQUNqQjtBQUNEO2tCQUFBLEFBQWUiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9iYXRyYS9EZXNrdG9wL2NvZGUvcHJvZHVjdC1yYXRpbmcifQ==