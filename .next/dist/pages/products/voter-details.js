'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _instance = require('../../ethereum/instance');

var _instance2 = _interopRequireDefault(_instance);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../routes');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\batra\\Desktop\\code\\product-rating\\pages\\products\\voter-details.js?entry';


var VoterDetails = function (_Component) {
  (0, _inherits3.default)(VoterDetails, _Component);

  function VoterDetails() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, VoterDetails);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = VoterDetails.__proto__ || (0, _getPrototypeOf2.default)(VoterDetails)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      products: [],
      accounts: '',
      pageSize: 5
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(VoterDetails, [{
    key: 'componentDidMount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_web2.default) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                _context.t0 = this;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                _context.t1 = _context.sent;
                _context.t2 = {
                  accounts: _context.t1
                };

                _context.t0.setState.call(_context.t0, _context.t2);

                this.getPage(0);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'getPage',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(page) {
        var skip, limit, products, i, p;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(page < 0)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return');

              case 2:
                _context2.t0 = this;
                _context2.next = 5;
                return _instance2.default.methods.productCount().call();

              case 5:
                _context2.t1 = _context2.sent;
                _context2.t2 = {
                  productCount: _context2.t1
                };

                _context2.t0.setState.call(_context2.t0, _context2.t2);

                skip = page * this.state.pageSize;
                limit = skip + this.state.pageSize;

                if (!(skip > this.state.productCount)) {
                  _context2.next = 12;
                  break;
                }

                return _context2.abrupt('return');

              case 12:
                if (limit > this.state.productCount) {
                  limit = this.state.productCount;
                }

                products = [];

                this.setState({ products: products });
                i = skip;

              case 16:
                if (!(i < limit)) {
                  _context2.next = 25;
                  break;
                }

                _context2.next = 19;
                return _instance2.default.methods.getProduct(i).call({ from: this.state.accounts[0] });

              case 19:
                p = _context2.sent;

                products.push(p);
                this.setState({ products: products });

              case 22:
                i++;
                _context2.next = 16;
                break;

              case 25:

                console.log('products', this.state.products);

              case 26:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getPage(_x) {
        return _ref3.apply(this, arguments);
      }

      return getPage;
    }()
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), _react2.default.createElement(_semanticUiReact.Segment, { raised: 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('div', { style: { backgroundColor: 'violet' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: 'purple', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'home', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }))), _react2.default.createElement(_routes.Link, { route: '/products/show', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: 'red', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'fighter jet', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), 'Go to Products page')), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, ' Voters Info : '), _react2.default.createElement('ul', { className: 'list-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, this.state.products.length ? null : _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'No info available'), this.state.products.map(function (p) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, p.pvoters.length ? _react2.default.createElement('li', { className: 'list-group-item', key: p.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, _react2.default.createElement(_semanticUiReact.Header, { size: 'medium', __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, 'Product  : ', p.title), _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, compact: 'true', __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, p.pvoters[0]), _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }, p.pvoters[1]), _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, p.pvoters[2]), _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }, p.pvoters[3]), _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, p.pvoters[4]), _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, p.pvoters[5])), _react2.default.createElement(_semanticUiReact.Divider, { section: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        })) : null);
      })))));
    }
  }]);

  return VoterDetails;
}(_react.Component);

exports.default = VoterDetails;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwcm9kdWN0c1xcdm90ZXItZGV0YWlscy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInJhdGluZyIsIkZvcm0iLCJJbnB1dCIsIlNlZ21lbnQiLCJCdXR0b24iLCJDb250YWluZXIiLCJTdGF0aXN0aWMiLCJEaXZpZGVyIiwiTWVzc2FnZSIsIkhlYWRlciIsIkljb24iLCJMaW5rIiwid2ViMyIsIlZvdGVyRGV0YWlscyIsInN0YXRlIiwicHJvZHVjdHMiLCJhY2NvdW50cyIsInBhZ2VTaXplIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZXRTdGF0ZSIsImdldFBhZ2UiLCJwYWdlIiwibWV0aG9kcyIsInByb2R1Y3RDb3VudCIsImNhbGwiLCJza2lwIiwibGltaXQiLCJpIiwiZ2V0UHJvZHVjdCIsImZyb20iLCJwIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJsZW5ndGgiLCJtYXAiLCJwdm90ZXJzIiwiaWQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBTzs7OztBQUNkLEFBQU8sQUFBWTs7OztBQUNuQixBQUFRLEFBQUssQUFBTSxBQUFRLEFBQU8sQUFBVSxBQUFVLEFBQVEsQUFBUSxBQUFPOztBQUM3RSxBQUFRLEFBQVc7O0FBQ25CLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDs7Ozs7Ozs7Ozs7Ozs7d04sQUFFSjtnQkFBUSxBQUNLLEFBQ1g7Z0JBRk0sQUFFSyxBQUNYO2dCLEFBSE0sQUFHSztBQUhMLEFBQ047Ozs7Ozs7Ozs7O0EsQUFNSTs7Ozs7Ozs7OEIsQUFDSjs7dUJBQStCLGNBQUEsQUFBSyxJLEFBQUwsQUFBUzs7Ozs7QTtBQUF6Qjs7NEIsQUFBVixvQ0FDTDs7cUJBQUEsQUFBSyxRQUFMLEFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkcsQUFHRDs7Ozs7O3NCQUNULE8sQUFBTzs7Ozs7Ozs7K0IsQUFDVjs7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d0JBQUEsQUFBSTtBQUFKO0FBQUEsYUFBSSxBQUFFLFFBRlIsQUFFRSxBQUFJLEFBQVUsQUFDZCxxQkFBQSxjQUFBOztzQkFBQTt3QkFBQSxBQUFJO0FBQUo7QUFBQSxhQUFJLEFBQUUsUUFIUixBQUdFLEFBQUksQUFBVSxBQUNkLHFCQUFBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQUk7QUFBSjtBQUFBLGFBQUksQUFBRSxRQUpSLEFBSUUsQUFBSSxBQUFVLEFBQ2QscUJBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFBSTtBQUFKO0FBQUEsYUFBSSxBQUFFLFFBTFIsQUFLRSxBQUFJLEFBQVUsQUFDZCxxQkFBQSxjQUFBOztzQkFBQTt3QkFBQSxBQUFJO0FBQUo7QUFBQSxhQUFJLEFBQUUsUUFSVixBQUVFLEFBTUUsQUFBSSxBQUFVLEFBRWhCLHNCQUFBLEFBQUMsMENBQVEsU0FBVDtzQkFBQTt3QkFYRCxBQUNELEFBVUU7QUFBQTtjQWJpQixBQUNyQixBQWFVO0FBNUJ4QixBQUNFLEFBRUUsQUFDRSxBQVFFLEFBRUcsQUF1Qlo7Ozs7O0EsQUEzRXdCLEFBOEUzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJ2b3Rlci1kZXRhaWxzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2JhdHJhL0Rlc2t0b3AvY29kZS9wcm9kdWN0LXJhdGluZyJ9