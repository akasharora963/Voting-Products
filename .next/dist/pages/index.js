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

var _instance = require('../ethereum/instance');

var _instance2 = _interopRequireDefault(_instance);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\batra\\Desktop\\code\\product-rating\\pages\\index.js?entry';


var ProductIndex = function (_Component) {
  (0, _inherits3.default)(ProductIndex, _Component);

  function ProductIndex() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ProductIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ProductIndex.__proto__ || (0, _getPrototypeOf2.default)(ProductIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      owner: '',
      newProductName: '',
      accounts: '',
      status: '',
      loading: false,
      errorMessage: ''
    }, _this.addProduct = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errorMessage: '' });
                _this.setState({ status: 'Adding product...' });
                _context.prev = 3;
                _context.next = 6;
                return _instance2.default.methods.addProduct(_this.state.newProductName).send({ from: _this.state.accounts[0] });

              case 6:
                _this.setState({ status: 'Product added!' });
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](3);

                _this.setState({ errorMessage: _context.t0.message });
                _this.setState({ status: 'Try again!' });

              case 13:
                _this.setState({ loading: false });

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 9]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ProductIndex, [{
    key: 'componentDidMount',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_web2.default) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return');

              case 2:
                _context2.t0 = this;
                _context2.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                _context2.t1 = _context2.sent;
                _context2.t2 = {
                  accounts: _context2.t1
                };

                _context2.t0.setState.call(_context2.t0, _context2.t2);

                _context2.t3 = this;
                _context2.next = 11;
                return _instance2.default.methods.owner().call();

              case 11:
                _context2.t4 = _context2.sent;
                _context2.t5 = {
                  owner: _context2.t4
                };

                _context2.t3.setState.call(_context2.t3, _context2.t5);

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _ref3.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (!_web2.default) return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, 'You need to install the MetaMask extension.');

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), _react2.default.createElement(_semanticUiReact.Segment, { raised: 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('div', { style: { backgroundColor: 'violet' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('div', { className: 'jumbotron', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, color: 'purple', compact: 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Voting Different Products ')), _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'The owner of this contract is : ', _react2.default.createElement('b', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, this.state.owner, ' '), ' '))), _react2.default.createElement(_semanticUiReact.Divider, { section: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.addProduct, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { focus: true, placeholder: 'Type product name...', value: this.state.newProductName, onChange: function onChange(event) {
          _this3.setState({ newProductName: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { color: 'red', loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'add circle', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), 'Add new product'), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      })), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, this.state.status)), _react2.default.createElement(_semanticUiReact.Divider, { section: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), _react2.default.createElement(_routes.Link, { route: '/products/show', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'tv', __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), ' Show Products ')))));
    }
  }]);

  return ProductIndex;
}(_react.Component);

exports.default = ProductIndex;

/*

<p><b>Products:</b></p>
<p>Total Product Count  : {this.state.productCount}</p>
<p>Total Voters : {this.state.votersCount}</p>
<ul className="list-group">
  {this.state.products.length ? null : <li>Loading...</li>}
  {this.state.products.map(p =>
    <li className="list-group-item" key={p.id}>
      <Divider section/>
      <Button primary value={p.id} onClick={this.addReview}>Vote this product</Button>
      <Statistic horizontal label='Counts' value={p.reviewsCount} floated='right'/>
      <Segment><p className="product-info"><b>{p.title}</b></p></Segment>
      <p> Voter Details </p>
      <Segment color="black">
        <p>{p.pvoters[0]}</p>
        <p>{p.pvoters[1]}</p>
        <p>{p.pvoters[2]}</p>
        <p>{p.pvoters[3]}</p>
        <p>{p.pvoters[4]}</p>
      </Segment>
    </li>
  )}
</ul>
<div className="pagination">
  <button type="button" className="btn btn-secondary" disabled={this.state.currPage === 0} onClick={event => this.getPage(this.state.currPage - 1)}>&lt;</button>
  Page: {this.state.currPage+1}
  <button type="button" className="btn btn-secondary" disabled={this.state.lastPage} onClick={event => this.getPage(this.state.currPage + 1)}>&gt;</button>
</div>
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInJhdGluZyIsIkZvcm0iLCJJbnB1dCIsIlNlZ21lbnQiLCJCdXR0b24iLCJDb250YWluZXIiLCJEaXZpZGVyIiwiTWVzc2FnZSIsIkljb24iLCJMaW5rIiwid2ViMyIsIlByb2R1Y3RJbmRleCIsInN0YXRlIiwib3duZXIiLCJuZXdQcm9kdWN0TmFtZSIsImFjY291bnRzIiwic3RhdHVzIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsImFkZFByb2R1Y3QiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJtZXRob2RzIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJjYWxsIiwiYmFja2dyb3VuZENvbG9yIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQU87Ozs7QUFDZCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFLLEFBQU0sQUFBUSxBQUFPLEFBQVUsQUFBUSxBQUFROztBQUM1RCxBQUFRLEFBQVc7O0FBQ25CLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDs7Ozs7Ozs7Ozs7Ozs7O3dOLEFBQ0o7YUFBUSxBQUNDLEFBQ1A7c0JBRk0sQUFFVSxBQUNoQjtnQkFITSxBQUdJLEFBQ1Y7Y0FKTSxBQUlFLEFBQ1I7ZUFMTSxBQUtJLEFBQ1Y7b0IsQUFOTSxBQU1TO0FBTlQsQUFDTixhLEFBZUg7MkZBQWEsaUJBQUEsQUFBTyxPQUFQO3NFQUFBO29CQUFBOzZDQUFBO21CQUNYO3NCQUFBLEFBQU0sQUFDTjtzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVcsTUFBSyxjQUE5QixBQUFjLEFBQStCLEFBQzdDO3NCQUFBLEFBQUssU0FBUyxFQUFDLFFBSEosQUFHWCxBQUFjLEFBQVM7Z0NBSFo7Z0NBQUE7dUJBS0gsbUJBQUEsQUFBTyxRQUFQLEFBQWUsV0FBVyxNQUFBLEFBQUssTUFBL0IsQUFBcUMsZ0JBQXJDLEFBQXFELEtBQUssRUFBQyxNQUFNLE1BQUEsQUFBSyxNQUFMLEFBQVcsU0FMekUsQUFLSCxBQUEwRCxBQUFPLEFBQW9COzttQkFDM0Y7c0JBQUEsQUFBSyxTQUFTLEVBQUMsUUFOTixBQU1ULEFBQWMsQUFBUztnQ0FOZDtBQUFBOzttQkFBQTtnQ0FBQTtnREFRVDs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsY0FBZSxZQUE5QixBQUFjLEFBQW9CLEFBQ2xDO3NCQUFBLEFBQUssU0FBUyxFQUFDLFFBVE4sQUFTVCxBQUFjLEFBQVM7O21CQUV6QjtzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQVhKLEFBV1gsQUFBYyxBQUFXOzttQkFYZDttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7Ozs7Ozs7Ozs7Ozs7O0EsQUFOTjs7Ozs7Ozs7K0IsQUFDSjs7dUJBQStCLGNBQUEsQUFBSyxJLEFBQUwsQUFBUzs7Ozs7QTtBQUF6Qjs7NkIsQUFBVjs7K0IsQUFDTDs7dUJBQTRCLG1CQUFBLEFBQU8sUUFBUCxBQUFlLFEsQUFBZixBQUF1Qjs7Ozs7QTtBQUFwQzs7NkIsQUFBVjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQW1CRTttQkFDUDs7VUFBQSxBQUFHLEFBQUMsZ0JBQU0sdUJBQ1IsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLE9BQUEsRUFEUSxBQUNSLEFBS0Y7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsMENBQ1EsS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7b0JBQTVCO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLEFBQUMsMENBQVEsUUFBVCxBQUFnQjtvQkFBaEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsU0FBSyxPQUFPLEVBQUUsaUJBQWQsQUFBWSxBQUFvQjtvQkFBaEM7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsMENBQVEsVUFBVCxNQUFrQixPQUFsQixBQUF3QixVQUFTLFNBQWpDLEFBQXlDO29CQUF6QztzQkFBQSxBQUFnRDtBQUFoRDt5QkFBZ0QsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRGxELEFBQ0UsQUFBZ0QsQUFDaEQsZ0RBQUEsQUFBQywwQ0FBUSxVQUFUO29CQUFBO3NCQUFBO0FBQUE7U0FBa0Qsb0RBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBSTtBQUFKO0FBQUEsY0FBSSxBQUFLLE1BQVQsQUFBZSxPQUFqRSxBQUFrRCxNQUp4RCxBQUNFLEFBQ0UsQUFFRSxBQUdKLHdCQUFBLEFBQUMsMENBQVEsU0FBVDtvQkFBQTtzQkFQRixBQU9FLEFBQ0E7QUFEQTswQkFDQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsWUFBWSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBL0MsQUFBcUQ7b0JBQXJEO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsd0NBQU0sT0FBUCxNQUFhLGFBQWIsQUFBeUIsd0JBQXVCLE9BQU8sS0FBQSxBQUFLLE1BQTVELEFBQWtFLGdCQUFnQixVQUFVLHlCQUFTLEFBQUM7aUJBQUEsQUFBSyxTQUFTLEVBQUMsZ0JBQWdCLE1BQUEsQUFBTSxPQUFyQyxBQUFjLEFBQThCLEFBQVE7QUFBMUo7b0JBQUE7c0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTsyQkFFRixBQUFDLHlDQUFPLE9BQVIsQUFBYyxPQUFNLFNBQVcsS0FBQSxBQUFLLE1BQXBDLEFBQTBDO29CQUExQztzQkFBQSxBQUFtRDtBQUFuRDt5QkFBbUQsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBQW5ELEFBQW1EO0FBQUE7VUFKckQsQUFJRSxBQUNBLG9DQUFBLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBdUIsVUFBUyxTQUFXLEtBQUEsQUFBSyxNQUFoRCxBQUFzRDtvQkFBdEQ7c0JBTkosQUFDRSxBQUtFLEFBRUY7QUFGRTsyQkFFRixjQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxjQUFLLEFBQUssTUFoQmQsQUFRRSxBQVFFLEFBQWdCLEFBRWxCLDBCQUFBLEFBQUMsMENBQVEsU0FBVDtvQkFBQTtzQkFsQkYsQUFrQkUsQUFDQTtBQURBOzBCQUNBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUEsQUFBZ0I7QUFBaEI7eUJBQWdCLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQUFoQixBQUFnQjtBQUFBO1VBeEIxQixBQUNFLEFBRUUsQUFDRSxBQW1CRSxBQUNFLEFBTVg7Ozs7O0FBSUYsQSxBQXpFMEI7O2tCQXlFMUIsQUFBZTs7QUFFaEIiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvYmF0cmEvRGVza3RvcC9jb2RlL3Byb2R1Y3QtcmF0aW5nIn0=