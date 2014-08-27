define([
  'jquery',
  'config/config',
  'utils',
  'views/table',
  'views/topPanel',
  'views/slidingPanel',
  'models/phoneState'
], function($, Config, Utils, Table, TopPanel, SlidingPanel, PhoneState) {

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
  if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
      if (typeof this !== "function") {
        // closest thing possible to the ECMAScript 5
        // internal IsCallable function
        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
      }

      var aArgs = Array.prototype.slice.call(arguments, 1),
          fToBind = this,
          fNOP = function () {},
          fBound = function () {
            return fToBind.apply(this instanceof fNOP && oThis
                   ? this
                   : oThis,
                   aArgs.concat(Array.prototype.slice.call(arguments)));
          };

      fNOP.prototype = this.prototype;
      fBound.prototype = new fNOP();

      return fBound;
    };
  }

  var App = function() {
    this.changeViews = this.changeViews.bind(this);
    this._init = this._init.bind(this);
    this._init();
  };

  App.prototype = {
    _init: function App__init() {
      var tableCContainer = '#tableC',
          tableFContainer = '#tableF',
          toggleFlipSelector = '#slidingPanel-tFlip',
          closeButtonSelector = '#slidingPanel-closeButton',
          cInputSelector = '#slidingPanel-cInput',
          fInputSelector = '#slidingPanel-fInput',
          pageSelector = '#page',
          splashSelector = '#splash',
          celciusPrefix = '°C',
          fahrenheitPrefix = '°F';

      this._phoneState = new PhoneState({
        isCelciusView: Config.isCelciusDefaultView,
        onCelciusViewChange: function(value) {
          this.changeViews(value);
        }.bind(this)
      });

      this._tableC = new Table({
        container: tableCContainer,
        boundary: Config.celciusBoundary,
        fromPrefix: celciusPrefix,
        toPrefix: fahrenheitPrefix,
        convertFunc: function(value) {
          return Utils.temperatureConvert(value, false);
        }
      });

      this._tableF = new Table({
        container: tableFContainer,
        boundary: Config.fahrenheitBoundary,
        fromPrefix: fahrenheitPrefix,
        toPrefix: celciusPrefix,
        convertFunc: function(value) {
          return Utils.temperatureConvert(value, true);
        }
      });

      new TopPanel({
        toggleFlipSelector: toggleFlipSelector,
        closeButtonSelector: closeButtonSelector,
        onCelciusViewChange: this._phoneState.setIsCelciusView
      });

      new SlidingPanel({
        cInputSelector: cInputSelector,
        fInputSelector: fInputSelector
      });

      $(pageSelector).show();
      $(splashSelector).hide();
    },
    changeViews: function App_changeViews(showCelcius) {
      if (this._showCelcius === showCelcius) {
        return;
      }

      this._showCelcius = showCelcius;

      if (showCelcius) {
        this._tableC.el.show();
        this._tableF.el.hide();
      } else {
        this._tableC.el.hide();
        this._tableF.el.show();
      }
    },
    _phoneState: null,
    _tableC: null,
    _tableF: null,
    _showCelcius: true
  };

  return App;
});