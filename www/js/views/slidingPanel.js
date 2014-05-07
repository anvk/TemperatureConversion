define([
  'jquery',
  'utils'
], function($, Utils) {
  /*
    cInputSelector
    fInputSelector
  */
  var SlidingPanel = function(options) {
    options = options || {};

    this._init = this._init.bind(this);

    this._init(options);
  };

  SlidingPanel.prototype = {
    _init: function(options) {
      var cInput = $(options.cInputSelector),
          fInput = $(options.fInputSelector);

      var convertFunc = function(toCelcius) {
        return function(event) {
          var el = (toCelcius) ? cInput : fInput,
              value = event.target.value;
          value = (value.length === 0) ? '' : Utils.temperatureConvert(parseInt(value), toCelcius);
          el.val(value);
        };
      };

      var emptyFunc = function() {
        cInput.val('');
        fInput.val('');
      };

      cInput.keyup(convertFunc(false)).click(emptyFunc);
      fInput.keyup(convertFunc(true)).click(emptyFunc);
    }
  };

  return SlidingPanel;
});