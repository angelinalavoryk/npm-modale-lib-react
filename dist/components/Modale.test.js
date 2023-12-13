"use strict";

require("core-js/modules/es.promise.js");
var _react = require("@testing-library/react");
var _Modale = _interopRequireDefault(require("./Modale"));
require("@testing-library/jest-dom");
var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import { click } from "@testing-library/user-event/dist/click";

describe("Modale", () => {
  test('Doit afficher le message donnée en props', () => {
    //Given 
    const message = 'Ceci ets un message';
    //When
    (0, _react.render)( /*#__PURE__*/React.createElement(_Modale.default, {
      showModal: true,
      message: message
    }));
    // screen.debug();
    //Then
    expect(_react.screen.getByText("Ceci ets un message")).toBeInTheDocument();
  });
  test('Doit fermer la modale', async () => {
    //Given
    const onClose = jest.fn();
    //When
    (0, _react.render)( /*#__PURE__*/React.createElement(_Modale.default, {
      showModal: true,
      closeModal: onClose
    }));
    await _userEvent.default.click(_react.screen.getByText('✕'));
    //Then
    expect(onClose).toHaveBeenCalled();
  });
});