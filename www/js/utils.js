define(function() {
  return {
    temperatureConvert: function temperatureConvert(t, toCelcius) {
      return parseInt((toCelcius) ? (t - 32) * (5 / 9) : t * (9 / 5) + 32);
    },
    stringBuilder: function stringBuilder(string, context, removeFromContext) {
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
    },
    // http://stackoverflow.com/a/7356528/812519
    isFunction: function isFunction(functionToCheck) {
      var getType = {};
      return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    }
  };
});