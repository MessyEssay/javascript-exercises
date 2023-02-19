const sumAll = function(arg1, arg2) {
    let firstArg =0;
    let secArg = 0;
    let i =0;
    let sum =firstArg+i;

    if(Array.isArray(arg1)||Array.isArray(arg2)){
        return"ERROR"
    }if(typeof(arg1)==="string"||typeof(arg2)=="string"){
        return"ERROR"
    }if(arg1<0||arg2<0){
        return"ERROR"
    }if(arg1===arg2){
        return arg1
    }if(arg1<arg2){
        firstArg=firstArg+arg1;
        secArg=secArg+arg2;
    }else{
        firstArg=firstArg+arg2;
        secArg=secArg+arg1;
    }

    while(firstArg+i<=secArg){
        sum=sum+firstArg+i;
        i++;
    }
    return sum;
};
//console.log("regular check(1,4) "+sumAll(1,4))
//console.log("negitive check(0,-1) "+sumAll(0,-1))
//console.log("Array check(2,[1,2]) "+sumAll(2,[1,2]))
//console.log("String check(2,'5') "+sumAll(2,"5"))
// Do not edit below this line
module.exports = sumAll;
