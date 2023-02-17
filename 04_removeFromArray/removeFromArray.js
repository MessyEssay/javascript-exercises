const removeFromArray = function(arr, ...arg) {
    let removeMe=[...arg];
    let oG=[arr];
    
    do{   //recursivly going through ...args until are expended
        while(oG.indexOf(removeMe[0])!=-1){   // this will return -1 if second arg is in first arg
            oG.forEach((el)=>{   //loop through oG and remove
                if(el===removeMe[0]){
                    oG=oG.splice(el,1)
                }
            }
        )}

        removeMe.shift()
        console.log("removeMe= "+removeMe);
        console.log("oG= "+oG);
    }
    while(removeMe.length!=0);
    return oG;


};
removeFromArray([1,2,3,4,5,6,7,8,9,10],1,0,1,0,"fat",20,9,-1)
// Do not edit below this line
//module.exports = removeFromArray;
