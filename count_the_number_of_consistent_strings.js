//09/25/2023

// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

var countConsistentStrings = function(allowed, words) {
    let counter = 0
    let boolean

    words.forEach((x) => {
        boolean = true
        for (let i = 0; i < x.length; i++) {
            if (!allowed.includes(x[i])) {
                boolean = false
            }
        }
        if (boolean) {
            counter++
        }
    })
    return counter
};

//87ms and 51mb

//The following is about the same on space and significantly better on time

var countConsistentStrings = function(allowed, words) {
    let counter = words.length

    words.forEach((x) => {
        for (let i = 0; i < x.length; i++) {
            if (!allowed.includes(x[i])) {
                counter--  
                break;
            }
        }
    })
    return counter
};

//63ms and 50.98mb