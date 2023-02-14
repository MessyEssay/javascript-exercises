const reverseString = function(string) {
    let array= string.split("");
    let result= array.reverse();
    result= result.join('');
    return result;
};

// Do not edit below this line
module.exports = reverseString;
