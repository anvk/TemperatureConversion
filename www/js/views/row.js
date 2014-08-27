define([
  'utils'
], function(Utils) {
  /*
    fromValue
    fromPrefix
    toValue
    toPrefix
    className
  */
  var Row = function(model) {
    model = model || {};

    this.getRowMarkup = this.getRowMarkup.bind(this);
    this._init = this._init.bind(this);

    this._init(model);
  };

  Row.prototype = {
    getRowMarkup: function Row_getRowMarkup() {
      return this._markup;
    },
    _init: function Row__init(model) {
      this._markup = Utils.stringBuilder(
        '<tr class="{{className}}">' +
        '<td>{{fromValue}} {{fromPrefix}}</td>' +
        '<td>{{toValue}} {{toPrefix}}</td>' +
        '</tr>', model);
    },
    _markup: null
  };

  return Row;
});