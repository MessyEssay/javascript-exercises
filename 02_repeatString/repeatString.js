const repeatString = function(string, num) {
    let result ='';
    if(num<0){
        return "ERROR"
    }
    while(num!=0){

        num = num -1;
        result =result.concat(string);
    }
    if(num ==0){
        return result;
    }
};

// Do not edit below this line
module.exports = repeatString;
