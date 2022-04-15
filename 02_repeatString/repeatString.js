const repeatString = function(string, num) {

    if (num < 0){
        return 'ERROR'
    }

    repeatedString = '';
    for (i = 0; i<num ; i++){
        repeatedString += string;
    }
    return repeatedString;
};

repeatString('hey', 10);

// Do not edit below this line
module.exports = repeatString;
