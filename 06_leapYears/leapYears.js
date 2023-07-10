function century(number){
    const numS = number.toString();
    const last = numS.slice(-2);
    if (last == "00"){
        return true
    }
    return false
}

const leapYears = function(year) {
    if (century(year)){
        if (year % 400 == 0){
            return true;
        }
        return false
    }

    if (year % 4 == 0){
        return true
    }
    return false
};

// Do not edit below this line
module.exports = leapYears;
