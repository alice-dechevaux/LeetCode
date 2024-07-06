//07/05/2024

// There are n people standing in a line labeled from 1 to n. The first person in the line is holding a pillow initially. Every second, the person holding the pillow passes it to the next person standing in the line. Once the pillow reaches the end of the line, the direction changes, and people continue passing the pillow in the opposite direction.

//     For example, once the pillow reaches the nth person they pass it to the n - 1th person, then to the n - 2th person and so on.

// Given the two positive integers n and time, return the index of the person holding the pillow after time seconds.

 

// Example 1:

// Input: n = 4, time = 5
// Output: 2
// Explanation: People pass the pillow in the following way: 1 -> 2 -> 3 -> 4 -> 3 -> 2.
// After five seconds, the 2nd person is holding the pillow.

// Example 2:

// Input: n = 3, time = 2
// Output: 3
// Explanation: People pass the pillow in the following way: 1 -> 2 -> 3.
// After two seconds, the 3rd person is holding the pillow.

 

// Constraints:

//     2 <= n <= 1000
//     1 <= time <= 1000

var passThePillow = function(n, time) {
    let current = 1, direction = "right";

    for (let i = 0; i < time; i++) {
        if (direction === "right") {
            current++;
            if (current === n) {
                direction = "left";
            }
        }
        else {
            current--;
            if (current === 1) {
                direction = "right";
            }
        }
    }
    return current;
};

//I thought this next solution would be better but it performed significantly worse than the above approach 

var passThePillow = function(n, time) {
    let switches = 0, remainder = 0, start = 1;
    if (time >= n) {
        switches = Math.floor(time / (n - 1));
        remainder = time % (n - 1);
    }
    
    if (switches && switches % 2) {
        start = n;
    }
    if (switches) {
        return start === 1 ? start + remainder : start - remainder;
    }
    else return start + time;
};
