const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b))
        return "ERROR";
    sum = 0;
    for (let inic = Math.min(a, b); inic <= Math.max(a, b); inic++)
        sum += inic
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
