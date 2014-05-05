tt = tt || {};

(function() {
  tt.utils = {
    temperatureConvert: function(t, toCelcius) {
      return (toCelcius) ? (t - 32) * (5 / 9) : t * (9 / 5) + 32;
    }
  };
})();