const leapYears = function(year) {
    let leapYear= false
    //leap years are divisable by 4
    if(year%4==0){
        leapYear=true;
    };
    if(year%100==0){
        leapYear=false;
    };
    if(year%400==0){
        leapYear=true;
    };
    return leapYear
    //not divisable by 100(1800,1900)
        //unless they are also divisable by 400
};

// Do not edit below this line
module.exports = leapYears;
