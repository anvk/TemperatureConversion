var tt = tt || {};

(function($, config, row) {
  /*
    container
    boundary
    convertFunc
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
          rows = [],
          rowEntry;
      for (var i = boundary * -1, length; i <= boundary; i = i + 5) {
        rowEntry = new row(boundary, convertFunc(boundary));
        rows.push(rowEntry.getRowMarkup());
      }

      this.el = $(options.container);
      this.el.append(rows);
    }
  };

  tt.table = table;
})(jQuery, tt.config || {}, tt.row || {});