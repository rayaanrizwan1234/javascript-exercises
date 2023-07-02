const removeFromArray = function() {
    // first need to fine the index of the element you want to remove
    // then use splice 
    let arr = arguments[0];

    for (let i = 1; i < arguments.length; i++){
        let index = arr.indexOf(arguments[i]);
        if (index != - 1){
            arr.splice(index, 1);
        }
    }
    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
