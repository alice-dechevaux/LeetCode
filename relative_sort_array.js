//06/11/2024

// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

 

// Example 1:

// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]

// Example 2:

// Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
// Output: [22,28,8,6,17,44]

 

// Constraints:

//     1 <= arr1.length, arr2.length <= 1000
//     0 <= arr1[i], arr2[i] <= 1000
//     All the elements of arr2 are distinct.
//     Each arr2[i] is in arr1.

var relativeSortArray = function(arr1, arr2) {
    const counts = {}, result = [];
    let resultB = [];
    arr1.forEach((x) => counts[x] = (counts[x] || 0) + 1);

    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < counts[arr2[i]]; j++) {
            result.push(arr2[i]);
        }
    }
    for (let count in counts) {
        if (!result.includes(+count)) {
            for (let i = 0; i < counts[count]; i++) {
                resultB.push(count);
            }
        }
    }
    resultB = resultB.sort((a, b) => a - b);
    return result.concat(resultB);
};