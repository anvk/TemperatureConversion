var tt = tt || {};

(function($) {
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

    }
  };

  tt.slidingPanel = slidingPanel;
})(jQuery);