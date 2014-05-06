var tt = tt || {};

(function($) {
  /*
    toggleFlipSelector
    onCelciusViewChange
  */
  var topPanel = function(options) {
    options = options || {};

    this._init = this._init.bind(this);

    this._init(options);
  };

  topPanel.prototype = {
    _init: function(options) {
      var toggleFlip = $(options.toggleFlipSelector),
          celciusSelectValue = 'C';

      toggleFlip.bind("change", function(event, ui) {
        options.onCelciusViewChange(toggleFlip[0].value === celciusSelectValue);
      });

      this._toggleFlip = toggleFlip;
    },
    _toggleFlip: null
  };

  tt.topPanel = topPanel;
})(jQuery);