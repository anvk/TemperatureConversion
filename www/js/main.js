tt = tt || {};

(function($, config, table, topBar) {
  var temperatureTable.prototype = function() {
    this.changeViews = this.changeViews.bind(this);
    this._init = this._init.bind(this);

    this._init();
  };

  var temperatureTable = {
    _init: function() {
      this._tableC = new table({
        container: '.tableC',
        boundary: config.celciusBoundary,
        convertFunc: function(value) {
          return utils.temperatureConvert(value, false);
        }
      });

      this._tableF = new table({
        container: '.tableF',
        boundary: config.fahrenheitBoundary,
        convertFunc: function(value) {
          return utils.temperatureConvert(value, true);
        }
      });

      this.showCelcius(utils.isCelciusDefaultView);
    },
    changeViews: function(showCelcius) {
      if (this._showCelcius === showCelcius) {
        return;
      }

      this._showCelcius = showCelcius;

      if (showCelcius) {
        this.tableC.show();
        this.tableF.hide();
      } else {
        this.tableC.hide();
        this.tableF.show();
      }
    },
    _tableC: null,
    _tableF: null,
    _showCelcius: true
  };

  tt.temperatureTable = temperatureTable;
})(jQuery, tt.config || {}, tt.table || {}, tt.topBar || {});