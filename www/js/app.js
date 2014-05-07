define([
  'jquery',
  'config/config',
  'utils',
  'views/table',
  'views/topPanel',
  'views/slidingPanel',
  'models/phoneState'
], function($, Config, Utils, Table, TopPanel, SlidingPanel, PhoneState) {

  var App = function() {
    this.changeViews = this.changeViews.bind(this);
    this._init = this._init.bind(this);

    this._init();
  };

  App.prototype = {
    _init: function() {
      var tableCContainer = '#tableC',
          tableFContainer = '#tableF',
          toggleFlipSelector = '#slidingPanel-tFlip',
          cInputSelector = '#slidingPanel-cInput',
          fInputSelector = '#slidingPanel-fInput',
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
        onCelciusViewChange: this._phoneState.setIsCelciusView
      });

      new SlidingPanel({
        cInputSelector: cInputSelector,
        fInputSelector: fInputSelector
      });

      $('#page').show();
    },
    changeViews: function(showCelcius) {
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