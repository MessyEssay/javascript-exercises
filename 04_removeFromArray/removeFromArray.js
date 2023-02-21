const removeFromArray = function(arr, ...arg) {
    let newArr=[];

    for(let i =0; i<arr.length; i++){
        let shouldRemove =false;
        for(let j =0; j< arg.length ;j++){
            if(arr[i]===arg[j]){
                shouldRemove=true;
                break
            }
        }
        if(!shouldRemove){
            newArr.push(arr[i]);
        };
    };
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
