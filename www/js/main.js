var tt = tt || {};

(function($, config, utils, table, topPanel) {
  var temperatureTable = function() {
    this.changeViews = this.changeViews.bind(this);
    this._init = this._init.bind(this);

    this._init();
  };

  temperatureTable.prototype = {
    _init: function() {
      var tableCContainer = '.tableC',
          tableFContainer = '.tableF',
          celciusPrefix = '°C',
          fahrenheitPrefix = '°F';

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

      new topPanel();

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
    _tableC: null,
    _tableF: null,
    _firstTimeLoad: true,
    _showCelcius: true
  };

  tt.temperatureTable = temperatureTable;
})(jQuery, tt.config || {}, tt.utils || {}, tt.table || {}, tt.topPanel || {});