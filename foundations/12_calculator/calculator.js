const add = function (num1, num2) {
    return num1 + num2;
};

const subtract = function (num1, num2) {
    return num1 - num2;
};

const sum = function (arrNum) {
    return arrNum.reduce((prev, current) => prev + current, 0);
};

const multiply = function (arrNum) {
    return arrNum.reduce((prev, current) => prev * current);
};

const power = function (num, pow) {
    // return Math.pow(num,pow);
    return num ** pow;
};

const factorial = function (num) {
    if (num === 0) return 1;
    else return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
