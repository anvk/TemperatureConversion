var tt = tt || {};

(function() {
  var phoneState = function(model) {
    model = model || {};

    this._init = this._init.bind(this);

    this._init(model);
  };

  phoneState.prototype = {
    _init: function(model) {
      this._isCelciusView = model.isCelciusView;
    },
    _isCelciusView: true
  };

  tt.phoneState = phoneState;
})();