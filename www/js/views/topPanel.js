define([
  'jquery'
], function($) {
  /*
    toggleFlipSelector
    closeButtonSelector
    onCelciusViewChange
  */
  var TopPanel = function(options) {
    options = options || {};

    this._init = this._init.bind(this);

    this._init(options);
  };

  TopPanel.prototype = {
    _init: function TopPanel__init(options) {
      var celciusSelectValue = 'C',
          toggleFlip = $(options.toggleFlipSelector),
          closeButton = $(options.closeButtonSelector);

      toggleFlip = $(options.toggleFlipSelector);

      toggleFlip.bind('change', function(event) {
        options.onCelciusViewChange(event.target.value === celciusSelectValue);
        setTimeout(function() {
          closeButton.click();
        }, 500);
      });
    }
  };

  return TopPanel;
});