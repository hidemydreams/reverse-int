module.exports = function reverse(n) {
    let positiveNum = Math.abs(n).toString().split("");
    let newNum = [];

    for (let i = 0; i < positiveNum.length; i++) {
        newNum.unshift(positiveNum[i]);
    }

    return newNum.join("");
};
