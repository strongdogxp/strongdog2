"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

define(['game', 'panelBase'], function (game, PanelBase) {
  //*******************************************************************************************************************
  // ** Panel for displaying Tips
  //*******************************************************************************************************************
  var PanelTip = /*#__PURE__*/function (_PanelBase) {
    _inherits(PanelTip, _PanelBase);

    var _super = _createSuper(PanelTip);

    function PanelTip(position, active) {
      _classCallCheck(this, PanelTip);

      return _super.call(this, position, active);
    }

    _createClass(PanelTip, [{
      key: "initialize",
      value: function initialize() {
        _get(_getPrototypeOf(PanelTip.prototype), "initialize", this).call(this);

        this.tip = null;
        this.prevActive = null;
      }
    }, {
      key: "setupElements",
      value: function setupElements() {
        this.labels.title = {
          x: 79,
          y: 1,
          a: 0.5
        };
        this.labels.tip = {
          x: 4,
          y: 13
        }; //this.labels.close = {x:79, y:4, a:0.5}
      } //*******************************************************************************************************************
      // * Setter
      //*******************************************************************************************************************

    }, {
      key: "setTip",
      value: function setTip(tip, prevActive) {
        this.tip = tip;
        this.prevActive = prevActive;
        this.move(tip.position);
      } //*******************************************************************************************************************
      // * Other
      //*******************************************************************************************************************

    }, {
      key: "titleLabelText",
      value: function titleLabelText() {
        return 'Tip';
      }
    }, {
      key: "tipLabelText",
      value: function tipLabelText() {
        return this.tip ? this.tip.text : '';
      }
    }, {
      key: "closeLabelText",
      value: function closeLabelText() {
        return 'Click to close.';
      }
    }, {
      key: "move",
      value: function move(position) {
        var direction = 0;

        if (this.position != position) {
          direction = position == 'bot' ? 1 : -1;
        }

        Object.values(this.sprites).concat([this.bgSprite]).forEach(function (s) {
          return s.y += 72 * direction;
        });
        this.position = position;
      }
    }]);

    return PanelTip;
  }(PanelBase);

  return PanelTip;
});