var tt = tt || {};

(function(utils) {
  /*
  fromValue
  fromPrefix
  toValue
  toPrefix
  */
  var row = function(model) {
    model = model || {};

    this.getRowMarkup = this.getRowMarkup.bind(this);
    this._init = this._init.bind(this);

    this._init(model);
  };

  row.prototype = {
    getRowMarkup: function() {
      return this._markup;
    },
    _init: function(model) {
      this._markup = utils.stringBuilder('<tr><td>{{fromValue}} {{fromPrefix}}</td><td>{{toValue}} {{toPrefix}}</td></tr>', model);
    },
    _markup: null
  };

  tt.row = row;
})(tt.utils || {});