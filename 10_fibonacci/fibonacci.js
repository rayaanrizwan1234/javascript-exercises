const fibonacci = function(num) {
    const i = parseInt(num);
    if (i < 0){
        return "OOPS";
    }
    if (i < 2){
        return i;
    }
    return fibonacci(i-1) + fibonacci(num-2);
};

// Do not edit below this line
module.exports = fibonacci;
