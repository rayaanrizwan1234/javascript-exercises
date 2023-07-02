const sumAll = function(x, y) {
    let sum = 0;
    if ((!Number.isInteger(x)) || (!Number.isInteger(y)) ||y < 0 || x < 0){
        return "ERROR"
    }
    if (y < x){
        let temp = x;
        x = y;
        y = temp;
    }
    for (let i = x; i <= y; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
