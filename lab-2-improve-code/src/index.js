module.exports = function greeting(i = 'my friend') {
    if (typeof i == 'string') {
        i = [i];
    }

    out = 'Hello, ';

    nStr = '';
    for (j in i) {
        nStr =
            nStr +
            i[j] +
            (parseInt(j) + 2 == i.length
                ? ', and '
                : parseInt(j) + 1 == i.length
                ? ''
                : ', ');
    }

    if (nStr.toUpperCase() === nStr) return 'HELLO ' + nStr + '!';

    return 'Hello, ' + nStr + '.';
};
