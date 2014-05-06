var tt = tt || {};

(function($) {
  var topPanel = function(options) {
    this._init = this._init.bind(this);

    this._init(options);
  };

  topPanel.prototype = {
    _init: function(options) {
      $('#slidingPanel-tFlip').bind( "change", function(event, ui) {
        
      });
    }
  };

  tt.topPanel = topPanel;
})(jQuery);