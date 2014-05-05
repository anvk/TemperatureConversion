tt = tt || {};

(function($, config, row) {
  /*
    container
    boundary
    convertFunc
  */
  var table.prototype = function(options) {
    options = options || {};

    this._init = this._init.bind(this);

    this._init();
  };

  var table = {
    el: null,
    _init: function(options) {
      var el = $(options.container),
          convertFunc = options.convertFunc,
          boundary = config.boundary,
          rows = [],
          row;
      for (var i = boundary * -1, length; i <= boundary; i = i + 5) {
        row = new row(boundary, convertFunc(boundary));
        rows.push(row.getRowMarkup());
      }

      el.append(rows);
    }
  };

  tt.table = table;
})(jQuery, tt.config || {}, tt.row || {});