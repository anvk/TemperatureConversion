var tt = tt || {};

(function($, utils) {
  /*
    cInputSelector
    fInputSelector
  */
  var slidingPanel = function(options) {
    options = options || {};

    this._init = this._init.bind(this);

    this._init(options);
  };

  slidingPanel.prototype = {
    _init: function(options) {
      var cInput = $(options.cInputSelector),
          fInput = $(options.fInputSelector);

      var convertFunc = function(toCelcius) {
        return function(event) {
          var el = (toCelcius) ? cInput : fInput,
              value = event.target.value;
          value = (value.length === 0) ? '' : utils.temperatureConvert(parseInt(value), toCelcius);
          el.val(value);
        };
      };

      cInput.keyup(convertFunc(false));
      fInput.keyup(convertFunc(true));
    }
  };

  tt.slidingPanel = slidingPanel;
})(jQuery, tt.utils || {});