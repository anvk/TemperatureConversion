var tt = tt || {};

(function(utils) {
  /*
    isCelciusView
    onCelciusViewChange
  */
  var phoneState = function(model) {
    model = model || {};

    this.setIsCelciusView = this.setIsCelciusView.bind(this);
    this._init = this._init.bind(this);

    this._init(model);
  };

  phoneState.prototype = {
    setIsCelciusView: function(value) {
      this._onCelciusViewChange(value);
      this._isCelciusView = value;
    },
    _init: function(model) {
      this._isCelciusView = model.isCelciusView;
      this._onCelciusViewChange = (utils.isFunction(model.onCelciusViewChange)) ? model.onCelciusViewChange : function() {};
    },
    _isCelciusView: true,
    _onCelciusViewChange: null
  };

  tt.phoneState = phoneState;
})(tt.utils || {});