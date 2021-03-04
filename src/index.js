module.exports = function reverse (n) {
    (n < 0) ? n = -1 * n : n;
    let arr = n.toString().split('').reverse();
    return Number(arr.join(''));
}
