const reverseString = function(string) {
    stringArray = string.split('');
    stringLength = stringArray.length;
    reversedStringArray = [];

    for (i=0 ; i<stringLength ; i++){
        reversedStringArray[i] = stringArray[stringLength - 1 - i];
    }

    return reversedStringArray.join("");
};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
