define([
  'utils'
], function(Utils) {
  /*
    isCelciusView
    onCelciusViewChange
  */
  var PhoneState = function(model) {
    model = model || {};

    this.setIsCelciusView = this.setIsCelciusView.bind(this);
    this._init = this._init.bind(this);

    this._init(model);
  };

  PhoneState.prototype = {
    setIsCelciusView: function(value) {
      this._onCelciusViewChange(value);
      this._isCelciusView = value;
    },
    _init: function(model) {
      this._isCelciusView = model.isCelciusView;
      this._onCelciusViewChange = (Utils.isFunction(model.onCelciusViewChange)) ? model.onCelciusViewChange : function() {};
    },
    _isCelciusView: true,
    _onCelciusViewChange: null
  };

  return PhoneState;
});