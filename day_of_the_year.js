//05/13/2024

// Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

 

// Example 1:

// Input: date = "2019-01-09"
// Output: 9
// Explanation: Given date is the 9th day of the year in 2019.

// Example 2:

// Input: date = "2019-02-10"
// Output: 41

 

// Constraints:

//     date.length == 10
//     date[4] == date[7] == '-', and all other date[i]'s are digits
//     date represents a calendar date between Jan 1st, 1900 and Dec 31th, 2019.

var dayOfYear = function(date) {
    date = date.split("-");
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let day = +date[2];

    for (let i = 0; i < +date[1] - 1; i++) {
        day += months[i];
    }

    if (date[1] > 2) {
        if ((date[0] % 400 === 0) || (date[0] % 100 !== 0 && date[0] % 4 == 0)) {
            day++;
        }
    }

    return day;
};