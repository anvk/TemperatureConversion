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

      var emptyFunc = function() {
        cInput.val('');
        fInput.val('');
      };

      cInput.keyup(convertFunc(false));
      cInput.click(emptyFunc);
      fInput.keyup(convertFunc(true));
      fInput.click(emptyFunc);
    }
  };

  tt.slidingPanel = slidingPanel;
})(jQuery, tt.utils || {});