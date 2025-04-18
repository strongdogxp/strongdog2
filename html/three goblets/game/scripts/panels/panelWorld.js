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
  // ** Panel for Area selection
  //*******************************************************************************************************************
  var PanelWorld = /*#__PURE__*/function (_PanelBase) {
    _inherits(PanelWorld, _PanelBase);

    var _super = _createSuper(PanelWorld);

    function PanelWorld(position, active) {
      _classCallCheck(this, PanelWorld);

      return _super.call(this, position, active);
    }

    _createClass(PanelWorld, [{
      key: "initialize",
      value: function initialize() {
        _get(_getPrototypeOf(PanelWorld.prototype), "initialize", this).call(this);

        this.act = 0;
      }
    }, {
      key: "setupElements",
      value: function setupElements() {
        this.labels.area = {
          x: 4,
          y: 56
        };
        this.bars.acts = {
          x: 18,
          y: 4,
          w: 26,
          h: 11,
          s: 6,
          n: 4,
          l: 4
        };
        this.bars.keys = {
          x: 22,
          y: 18,
          w: 16,
          h: 16,
          s: 2,
          n: 8,
          l: 4,
          b: [2, 44, true],
          disabled: true
        };
        this.bars.areas = {
          x: 23,
          y: 19,
          w: 32,
          h: 32,
          s: 8,
          n: 3,
          l: 3
        };
        this.bars.orb = {
          x: 63,
          y: 19,
          w: 32,
          h: 32,
          s: 0,
          n: 1,
          l: 1,
          disabled: true
        };
      } //*******************************************************************************************************************
      // * Create Sprites
      //*******************************************************************************************************************

    }, {
      key: "actsBarSetupSprites",
      value: function actsBarSetupSprites(sprites, rect, index) {
        var text = index < 3 ? 'Act ' + (index + 1) : 'Orb';
        sprites.text = game.graphics.addText(Math.round(rect.x + rect.w / 2), rect.y, text);
        sprites.rect = game.graphics.addRect(rect, 8, 2);
        sprites.text.anchor.x = 0.5;
      }
    }, {
      key: "keysBarSetupSprites",
      value: function keysBarSetupSprites(sprites, rect, index) {
        sprites.rect = game.graphics.addRect(rect, 8, 2);
        sprites.icon = game.graphics.addSprite(rect.x, rect.y, '');
      }
    }, {
      key: "areasBarSetupSprites",
      value: function areasBarSetupSprites(sprites, rect, index) {
        sprites.icon = game.graphics.addSprite(rect.x, rect.y, '');
        sprites.rect = game.graphics.addRect(rect, 8, 2);
      }
    }, {
      key: "orbBarSetupSprites",
      value: function orbBarSetupSprites(sprites, rect, index) {
        sprites.icon = game.graphics.addSprite(rect.x, rect.y, '');
        sprites.rect = game.graphics.addRect(rect, 8, 2);
      } //*******************************************************************************************************************
      // * Update Sprites
      //*******************************************************************************************************************

    }, {
      key: "actsBarUpdateSprites",
      value: function actsBarUpdateSprites(sprites, rect, index) {
        var firstActCleared = game.world.unlocked(3);
        var actUnlocked = this.actUnlocked(index);
        var visible = firstActCleared && actUnlocked;
        var active = this.act == index;
        sprites.text.visible = visible;
        sprites.rect.visible = visible;
        sprites.text.tint = active ? 0xffffff : 0x4f4f4f;
        sprites.text.x = Math.round(rect.x + rect.w / 2);
        sprites.rect.x = rect.x;
      }
    }, {
      key: "keysBarUpdateSprites",
      value: function keysBarUpdateSprites(sprites, rect, index) {
        var key = game.world.keys[index];
        var dragged = this.getDraggedItem();
        var selected = game.world.keySelected === key;
        var borderColor = dragged && dragged.tier == index ? 1 : selected ? 1 : 2;
        var fillColor = 0;
        game.graphics.redrawRect(sprites.rect, rect, fillColor, borderColor);
        sprites.icon.texture = this.getKeyIcon(key);
        this.toggleBarVisibility(this.bars.keys, sprites);
      }
    }, {
      key: "areasBarUpdateSprites",
      value: function areasBarUpdateSprites(sprites, rect, index) {
        var available = this.unlockedAt(index);
        var borderColor = 2;
        var icon = 'area' + (available ? index + this.act * 3 : 'L');
        game.graphics.redrawRect(sprites.rect, rect, 8, borderColor);
        sprites.icon.texture = game.graphics.getTexture(icon);
        this.toggleBarVisibility(this.bars.areas, sprites);
      }
    }, {
      key: "orbBarUpdateSprites",
      value: function orbBarUpdateSprites(sprites, rect, index) {
        var available = this.unlockedAt(index);
        var borderColor = 2;
        var icon = 'map' + (game.world.keySelected !== 'none' ? game.world.keySelected.tier : 'L');
        game.graphics.redrawRect(sprites.rect, rect, 8, borderColor);
        sprites.icon.texture = game.graphics.getTexture(icon);
        this.toggleBarVisibility(this.bars.orb, sprites);
      } //*******************************************************************************************************************
      // * Input
      //*******************************************************************************************************************

    }, {
      key: "actsBarClicked",
      value: function actsBarClicked(index) {
        var actUnlocked = this.actUnlocked(index);

        if (actUnlocked) {
          this.act = index;
          this.toggleBars(index);
        }
      }
    }, {
      key: "keysBarClicked",
      value: function keysBarClicked(index) {
        var dragged = this.getDraggedItem();

        if (dragged && dragged.tier == index) {
          game.world.keys[index] = dragged;
          game.world.keySelected = game.world.keys[index];
          this.setDraggedItem(null);
          game.audio.playSound('equip');
        } else if (game.world.keys[index]) {
          game.world.keySelected = game.world.keySelected === game.world.keys[index] ? 'none' : game.world.keys[index];
        } else {
          game.audio.playSound('buzzer');
        }
      }
    }, {
      key: "areasBarClicked",
      value: function areasBarClicked(index) {
        var available = this.unlockedAt(index);

        if (available && !this.getDraggedItem()) {
          var area = this.areaAt(index);
          game.panels.activate('Battle');
          game.panels.activate('Inventory');
          game.panels.all['Battle'].setupBattle(area);
          game.panels.all['Battle'].updateRects();
          game.panels.all['Battle'].updateSpriteset();
        } else {
          game.audio.playSound('buzzer');
        }
      }
    }, {
      key: "orbBarClicked",
      value: function orbBarClicked(index) {
        if (game.world.keySelected !== 'none' && !this.getDraggedItem()) {
          var area = game.world.maps[game.world.keySelected.tier];
          game.panels.activate('Battle');
          game.panels.activate('Inventory');
          game.panels.all['Battle'].setupBattle(area);
          game.panels.all['Battle'].updateRects();
          game.panels.all['Battle'].updateSpriteset();
        }

        {
          game.audio.playSound('buzzer');
        }
      } //*******************************************************************************************************************
      // * Tooltips
      //*******************************************************************************************************************
      //*******************************************************************************************************************
      // * Other
      //*******************************************************************************************************************

    }, {
      key: "areaLabelText",
      value: function areaLabelText() {
        var area = this.hoveredArea() || this.hoveredMap();

        if (area) {
          var name = area.name;
          var floorInfo = ' (' + area.furthestReached + '/' + area.length + ')';
          return name + floorInfo;
        }

        return '';
      }
    }, {
      key: "hoveredArea",
      value: function hoveredArea() {
        var index = this.hoveringIndex(this.bars.areas);
        var available = index !== undefined && this.unlockedAt(index);

        if (available) {
          return this.areaAt(index);
        }
      }
    }, {
      key: "hoveredMap",
      value: function hoveredMap() {
        var hovering = this.hoveringIndex(this.bars.orb) !== undefined;

        if (hovering) {
          return this.selectedMap();
        }
      }
    }, {
      key: "toggleBars",
      value: function toggleBars(index) {
        this.bars.areas.disabled = index == 3;
        this.bars.orb.disabled = index != 3;
        this.bars.keys.disabled = index != 3;
      }
    }, {
      key: "toggleBarVisibility",
      value: function toggleBarVisibility(bar, sprites) {
        Object.values(sprites).forEach(function (s) {
          return s.visible = !bar.disabled;
        });
      }
    }, {
      key: "actUnlocked",
      value: function actUnlocked(index) {
        return game.world.unlocked(index * 3) || index == 3 && game.world.shownFin;
      }
    }, {
      key: "areaAt",
      value: function areaAt(index) {
        return game.world.areas[index + this.act * 3];
      }
    }, {
      key: "selectedMap",
      value: function selectedMap() {
        return game.world.keySelected && game.world.maps[game.world.keySelected.tier];
      }
    }, {
      key: "unlockedAt",
      value: function unlockedAt(index) {
        var areaIndex = index + this.act * 3;
        return game.world.unlocked(areaIndex);
      }
    }, {
      key: "hoveringIndex",
      value: function hoveringIndex(bar) {
        if (!bar.disabled) {
          for (var i = 0; i < bar.n; i++) {
            var x = this.getBarRectX(i, bar);
            var y = this.getBarRectY(i, bar);
            var rect = this.adjustedRect({
              x: x,
              y: y,
              w: bar.w,
              h: bar.h
            });

            if (game.input.mouseWithin(rect)) {
              return i;
            }
          }
        }
      }
    }, {
      key: "getKeyIcon",
      value: function getKeyIcon(key) {
        if (key) {
          return game.world.keySelected === key ? game.graphics.getTexture(key.graphic()) : game.graphics.getModifiedTexture(key.graphic(), 'disabled');
        } else {
          return game.graphics.getTexture('keyL');
        }
      }
    }, {
      key: "refresh",
      value: function refresh() {
        this.refreshActBarPosition();

        _get(_getPrototypeOf(PanelWorld.prototype), "refresh", this).call(this);
      }
    }, {
      key: "refreshActBarPosition",
      value: function refreshActBarPosition() {
        this.bars.acts.x = game.world.shownFin ? 18 : 34;
      }
    }]);

    return PanelWorld;
  }(PanelBase);

  return PanelWorld;
});