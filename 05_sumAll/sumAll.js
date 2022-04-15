const sumAll = function(start, end) {
    var sum = 0;

    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end))
        return 'ERROR';

    if (end < start){
        const temp = start;
        start = end;
        end = temp;
    }
    
    for (i = start; i<=end ; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
