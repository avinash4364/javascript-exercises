const palindromes = function (str) {
    // remove punctuations and space
    const alphaNumericArray = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (alphaNumericArray.includes(str[i].toLowerCase())) {
            newStr += str[i].toLowerCase();
        }
    }

    let length = newStr.length;
    let halfLength = (length + 1) / 2;
    let palindrome = true;
    for (let i = 0; i < halfLength; i++) {
        if (newStr[i] !== newStr[length - i - 1]) {
            palindrome = false;
            return palindrome;
        }
    }
    return palindrome;
};

// Do not edit below this line
module.exports = palindromes;
