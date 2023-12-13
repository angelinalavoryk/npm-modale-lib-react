"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./style/Modale.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modale = _ref => {
  let {
    showModal,
    closeModal,
    message
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showModal === true && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("span", null, message)), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-close-icon",
    onClick: closeModal
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "close-emoji"
  }, "\u2715"))));
};
var _default = exports.default = Modale;