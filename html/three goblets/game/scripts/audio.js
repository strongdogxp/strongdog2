"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

define(['config'], function (config) {
  //*******************************************************************************************************************
  // ** Handles all audio tasks
  //*******************************************************************************************************************
  var Audio = /*#__PURE__*/function () {
    function Audio() {
      _classCallCheck(this, Audio);

      this.sounds = {};
      this.soundtracks = [];
      this.soundtrack = null;
      this.soundVolume = config.soundVolume;
      this.soundtrackVolume = config.soundtrackVolume;
    }

    _createClass(Audio, [{
      key: "prepareSound",
      value: function prepareSound(name, audio) {
        audio.volume(config.soundVolume);
        this.sounds[name] = audio;
      }
    }, {
      key: "prepareSoundtrack",
      value: function prepareSoundtrack(audio) {
        audio.volume(this.soundtrackVolume);
        audio.loop(true);
        this.soundtracks.push(audio);
      } //*******************************************************************************************************************
      // * Play
      //*******************************************************************************************************************

    }, {
      key: "playSound",
      value: function playSound(name) {
        var sound = this.sounds[name];

        if (sound && this.soundVolume > 0) {
          sound.seek(0);
          sound.play();
        }
      }
    }, {
      key: "playSoundtrack",
      value: function playSoundtrack(index) {
        var fadeTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        var soundtrack = this.soundtracks[index - 1];

        if (soundtrack) {
          if (this.soundtrack) {
            this.soundtrack.fade(this.soundtrackVolume, 0, 1 * fadeTime);
          }

          this.soundtrack = soundtrack;
          this.soundtrack.stop();
          this.soundtrack.play();
          this.soundtrack.fade(0, this.soundtrackVolume, 2 * fadeTime);
        }
      } //*******************************************************************************************************************
      // * Other
      //*******************************************************************************************************************

    }, {
      key: "setSoundVolume",
      value: function setSoundVolume(volume) {
        Object.values(this.sounds).forEach(function (s) {
          return s.volume(volume);
        });
        this.soundVolume = volume;
      }
    }, {
      key: "setSoundtrackVolume",
      value: function setSoundtrackVolume(volume) {
        this.soundtracks.forEach(function (t) {
          return t.volume(volume);
        });
        this.soundtrackVolume = volume;
      }
    }, {
      key: "mute",
      value: function mute() {
        Object.values(this.sounds).forEach(function (s) {
          return s.volume(0);
        });
        this.soundtracks.forEach(function (t) {
          return t.volume(0);
        });
      }
    }, {
      key: "unmute",
      value: function unmute() {
        var _this = this;

        Object.values(this.sounds).forEach(function (s) {
          return s.volume(_this.soundVolume);
        });
        this.soundtracks.forEach(function (t) {
          return t.volume(_this.soundtrackVolume);
        });
      }
    }]);

    return Audio;
  }();

  return Audio;
});