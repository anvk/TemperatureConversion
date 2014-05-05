

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


