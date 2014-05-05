tt = tt || {};

(function() {
  /*
  fromValue
  fromPrefix
  toValue
  toPrefix
  */
  var row.prototype = function(options) {
    this.getRowMarkup = this.getRowMarkup.bind(this);
    this._init = this._init.bind(this);

    this._init(options);
  };

  var row = {
    getRowMarkup: function() {
      return this._markup;
    },
    _init: function(options) {
      this._markup = '';
    },
    _markup: null
  };

  tt.row = row;
})();