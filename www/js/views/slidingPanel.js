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
    _init: function SlidingPanel__init(options) {
      var cInput = $(options.cInputSelector),
          fInput = $(options.fInputSelector);

      var convertFunc = function(isToCelcius) {
        return function(event) {

          var el = (isToCelcius) ? cInput : fInput,
              target = event.target,
              value = target.value,
              maxLength = target.maxLength;

          if (value.length === 0) {
            el.val('');
            return;
          }

          if (value < 0) {
            maxLength = maxLength + 1;
          }

          if (value.length > maxLength) {
            value = target.value.slice(0, maxLength);
            target.value = value;
          }

          el.val(Utils.temperatureConvert(parseInt(value), isToCelcius));
        };
      };

      var emptyFunc = function() {
        cInput.val('');
        fInput.val('');
      };

      cInput.bind('input', convertFunc(false)).click(emptyFunc);
      fInput.bind('input', convertFunc(true)).click(emptyFunc);
    }
  };

  return SlidingPanel;
});