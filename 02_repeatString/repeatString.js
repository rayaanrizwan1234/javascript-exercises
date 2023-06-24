const repeatString = function(str, n) {
    let res = "";
    for (let i = 0; i <n; i++){
        res += str;
    }
    if (n < 0){
        return "ERROR";
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
