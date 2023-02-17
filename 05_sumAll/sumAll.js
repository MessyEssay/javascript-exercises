const sumAll = function(arg1, arg2) {
    let firstArg =0;
    let secArg = 0;
    let sum =0;

    if(arg1===NaN||arg2===NaN){
        console.log("error")
        return"ERROR"
    }if(arg1<0||arg2<0){
        console.log("error")
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

    for(let i =firstArg; i>=secArg;i++){
        sum=sum+i;
        console.log(sum)
    }
    return sum;
};
//console.log(sumAll(2,5))
//console.log(sumAll(0,-1))
//console.log(sumAll(2,[1,2]))
//console.log(sumAll(2,"5"))
// Do not edit below this line
//module.exports = sumAll;
