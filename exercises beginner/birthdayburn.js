function cake(x, y) {
    const arr = y.split('');
    return arr.map((item, i) => i % 2 ? item.charCodeAt(0) - 96 : item.charCodeAt(0))
        .reduce((a, b) => a + b) > 0.7 * x ? 'Fire!' : 'That was close!';

}