var core = new function() {
    var that = this;

    that.setDefault = function () {
        that.switchView(-1);

        config.visibleValues = config.availableValues[config.startView];

        for (var i=0; i< config.availableValues.length; i++) {
            that.setItems(i);
        }

        that.switchView(config.startView);
    };

    that.setItems = function (index) {
        var configT = that.getConfigBasedOnType(index);

        var tableClass = ".valueTable" + index;

        $(tableClass).empty();

        var odd = true;
        for (var key in configT.elements) {
            (odd) ? rowClass = "row" : rowClass = "rowodd";
            $(tableClass).prepend("<div class=\"" + rowClass + "\">" + configT.preT + key + " <img src=\"" + configT.imagePath +
                    "\" /> " + configT.elements[key] + configT.postT + "</div>");
            odd = !odd;
        }
    };

    that.getConfigBasedOnType = function (index) {
        var configT = {};

        if (index === 0) {
            configT.elements = ctof;
            configT.imagePath = "img/arrow_green_small.png";
            configT.preT = "&nbsp;°C&nbsp;&nbsp;&nbsp;";
            configT.postT = "&nbsp;&nbsp;&nbsp;°F&nbsp;";
        } else if (index === 1) {
            configT.elements = ftoc;
            configT.imagePath = "img/arrow_red_small.png";
            configT.preT = "&nbsp;°F&nbsp;&nbsp;&nbsp;";
            configT.postT = "&nbsp;&nbsp;&nbsp;°C&nbsp;";
        }

        return configT;
    };

    that.switchView = function (index) {
        var convArrowClass = "";
        var relationImageClass = "";
        for (var i=0; i< config.availableValues.length; i++) {
            viewClass = ".valueTable" + i;
            convArrowClass = ".convImage" + i;
            relArrowCloass = ".relationImage" + i;
            if (index === i) {
                $(viewClass).show();
                $(convArrowClass).show();
                $(relArrowCloass).show();
                continue;
            }

            $(viewClass).hide();
            $(convArrowClass).hide();
            $(relArrowCloass).hide();
        }

        config.currentView = index;
    };

    that.convert = function (value) {
        var func = null;
        var postfix = "";

        if (config.currentView === 0) {
            func = that.FTOC;
            postfix = " °F";
        } else if (config.currentView === 1) {
            func = that.CTOF;
            postfix = " °C";
        }

        return func(value) + postfix;
    };

    that.CTOF = function (value) {
        return parseInt((5 / 9) * (value - 32));
    };

    that.FTOC = function (value) {
        return parseInt((9 / 5) * (value + 32));
    };
};