const convertToCelsius = function (fah) {
    return Math.round(((fah - 32) * 50) / 9) / 10;
};

const convertToFahrenheit = function (cel) {
    return Math.round(((9 / 5) * cel + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
