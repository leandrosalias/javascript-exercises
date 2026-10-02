const repeatString = function(str, rep) {
    let resultString = ""
    if (rep < 0)
        return "ERROR";
    if (rep == 0)
        return "";
    for (let i = 1; i <= rep; i++)
        resultString += str
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
