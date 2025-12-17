const repeatString = function (string, num) {
    if (num < 0) return "ERROR";
    let empty = "";
    for (let i = 0; i < num; i++) {
        empty += string;
    }
    return empty;
};

// Do not edit below this line
module.exports = repeatString;
