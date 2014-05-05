var tt = tt || {};

(function($, config, row) {
  /*
    container
    boundary
    convertFunc
    fromPrefix
    toPrefix
  */
  var table = function(options) {
    options = options || {};

    this._init = this._init.bind(this);

    this._init(options);
  };

  table.prototype = {
    el: null,
    _init: function(options) {
      var convertFunc = options.convertFunc,
          boundary = options.boundary,
          fromPrefix = options.fromPrefix,
          toPrefix = options.toPrefix,
          rows = [],
          rowEntry;
      for (var i = boundary, length; i >= -1 * boundary; i = i - 5) {
        rowEntry = new row({
          fromValue: i,
          toValue: convertFunc(i),
          fromPrefix: fromPrefix,
          toPrefix: toPrefix
        });
        rows.push(rowEntry.getRowMarkup());
      }

      this.el = $(options.container);
      this.el[0].innerHTML = rows.join('');
    }
  };

  tt.table = table;
})(jQuery, tt.config || {}, tt.row || {});