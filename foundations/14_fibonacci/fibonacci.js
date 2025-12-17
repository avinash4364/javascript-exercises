const fibonacci = function (n) {
    let num = n;
    if (typeof n !== "number") {
        num = parseInt(n);
    }
    if (num < 0) {
        return "OOPS";
    } else if (num === 0) {
        return 0;
    }
    let a = 0;
    let b = 1;
    let sum = 1;
    for (let i = 0; i < num - 1; i++) {
        sum = a + b;
        a = b;
        b = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
