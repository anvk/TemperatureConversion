function onLoad() {
    $(".input").val("0");
    core.setDefault();
    showOutput();

    hideFooter();
}

function hideFooter() {
    setTimeout(function() {
        $(".footer").hide(1000);
        //$('.view').animate({height: '+=40'}, 1000);
    },5000);
}

function relationClick(index) {
    core.switchView(index);
    showOutput();
}

function validate(c, evt) {
    var msg = c.value;
    var chr;

    for (i = 0; i < msg.length; i++) {
        chr = msg.substring(i, i + 1);
        if (chr < "0" || chr > "9") {
            msg = msg.substring(0, i);
            c.value = msg;
        }
    }

    showOutput();
}

function showOutput() {
    var value = $(".input").val();

    if (value === "") {
        $(".output").val("");
        return;
    }

    $(".output").val(core.convert(parseInt(value)));
}
