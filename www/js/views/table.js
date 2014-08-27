define([
  'jquery',
  'views/row'
], function($, Row) {
  /*
    container
    boundary
    convertFunc
    fromPrefix
    toPrefix
  */
  var Table = function(options) {
    options = options || {};

    this._init = this._init.bind(this);

    this._init(options);
  };

  Table.prototype = {
    _init: function Table__init(options) {
      var convertFunc = options.convertFunc,
          boundary = options.boundary,
          fromPrefix = options.fromPrefix,
          toPrefix = options.toPrefix,
          oddClassRow = 'row',
          evenClassRow = 'rowodd',
          oddRow = true,
          rows = [],
          rowEntry;

      for (var i = boundary; i >= -1 * boundary; i = i - 5) {
        rowEntry = new Row({
          fromValue: i,
          toValue: convertFunc(i),
          fromPrefix: fromPrefix,
          toPrefix: toPrefix,
          className: (oddRow) ? oddClassRow : evenClassRow
        });
        oddRow = !oddRow;
        rows.push(rowEntry.getRowMarkup());
      }

      this.el = $(options.container);
      this.el[0].innerHTML = rows.join('');
    },
    el: null
  };

  return Table;
});