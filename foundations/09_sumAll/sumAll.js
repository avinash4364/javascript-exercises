const sumAll = function (a, b) {
    // console.log(typeof a);
    if (a > 0 && b > 0 && Number.isInteger(a) && Number.isInteger(b)) {
        if (a === b) return 0;
        let min = Math.min(a, b);
        let max = Math.max(a, b);
        return (max * (max + 1)) / 2 - (min * (min + 1)) / 2 + min;
    } else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
