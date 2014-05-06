var tt = tt || {};

(function($, config, utils, table, topPanel, slidingPanel, phoneState) {
  var temperatureTable = function() {
    this.changeViews = this.changeViews.bind(this);
    this._init = this._init.bind(this);

    this._init();
  };

  temperatureTable.prototype = {
    _init: function() {
      var tableCContainer = '.tableC',
          tableFContainer = '.tableF',
          toggleFlipSelector = '#slidingPanel-tFlip',
          cInputSelector = 'slidingPanel-cInput',
          fInputSelector = 'slidingPanel-fInput',
          celciusPrefix = '°C',
          fahrenheitPrefix = '°F';

      this._phoneState = new phoneState({
        isCelciusView: config.isCelciusDefaultView,
        onCelciusViewChange: function(value) {
          this.changeViews(value);
        }.bind(this)
      });

      this._tableC = new table({
        container: tableCContainer,
        boundary: config.celciusBoundary,
        fromPrefix: celciusPrefix,
        toPrefix: fahrenheitPrefix,
        convertFunc: function(value) {
          return utils.temperatureConvert(value, false);
        }
      });

      this._tableF = new table({
        container: tableFContainer,
        boundary: config.fahrenheitBoundary,
        fromPrefix: fahrenheitPrefix,
        toPrefix: celciusPrefix,
        convertFunc: function(value) {
          return utils.temperatureConvert(value, true);
        }
      });

      new topPanel({
        toggleFlipSelector: toggleFlipSelector,
        onCelciusViewChange: this._phoneState.setCelciusView
      });

      new slidingPanel({
        cInputSelector: cInputSelector,
        fInputSelector: fInputSelector
      });

      this.changeViews(config.isCelciusDefaultView);
    },
    changeViews: function(showCelcius) {
      if (this._showCelcius === showCelcius && !this._firstTimeLoad) {
        return;
      }

      if (this._firstTimeLoad) {
        this._firstTimeLoad = false;
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
    _firstTimeLoad: true,
    _showCelcius: true
  };

  tt.temperatureTable = temperatureTable;
})(jQuery, tt.config || {}, tt.utils || {}, tt.table || {}, tt.topPanel || {}, tt.slidingPanel || {}, tt.phoneState || {});