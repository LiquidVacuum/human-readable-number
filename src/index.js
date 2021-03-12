module.exports = function toReadable (number) {
    /* Looks messy. Maybe it's better to use arrays and modulus operator.
    *  At least it works from 0 to 9999.
    */
    let onesEnum = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    };
    let tensEnum = {
        0: '',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };
    let specialEnum = {        
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };
    
    if (number === 0) return 'zero';
    let arr = number.toString().split('');
    let output = '';
    
    if (arr[arr.length-2] === undefined) return onesEnum[number];
    
    if (arr[arr.length-2] == 1) {
        output += specialEnum[arr.splice(arr.length-2).join('')];
    } else {
        output += [ onesEnum[arr.pop()], tensEnum[arr.pop()] ].reverse().join(' ').trim();
    }
    
    if (arr[arr.length-1] === undefined) return output;

    //hundreds
    if (arr[arr.length-2] === undefined) {
        output = `${onesEnum[arr.pop()]} hundred ${output}`;
    } else {
        if (arr[arr.length-2] == 1) {
            output = `${specialEnum[arr.splice(arr.length-2).join('')]} hundred ${output}`;
        } else {
            output = `${[onesEnum[arr.pop()], tensEnum[arr.pop()]].reverse().join(' ').trim()} hundred ${output}`;
        }
    }
    return output.trim();
}
