var tt = tt || {};

(function($) {
  var topPanel = function(options) {
    this._init = this._init.bind(this);

    this._init(options);
  };

  topPanel.prototype = {
    _init: function(options) {
      $('.slidingPanelButton').click(function() {
        $('.slidePanel').panel('open');
      });
    }
  };

  tt.topPanel = topPanel;
})(jQuery);