tt = tt || {};

(function() {
  tt.utils = {
    temperatureConvert: function(t, toCelcius) {
      return parseInt((toCelcius) ? (t - 32) * (5 / 9) : t * (9 / 5) + 32);
    },
    stringBuilder: function(string, context, removeFromContext) {
      if (!string) {
        return;
      }

      context = context || {};
      removeFromContext = (removeFromContext === undefined || removeFromContext === null) ? true : removeFromContext;

      return string.replace(/\{\{([a-zA-Z0-9]+)\}\}/g, function(str, key) {
        var value = context[key];
        if (removeFromContext) {
          delete context[key];
        }
        return value;
      });
    }
  };
})();