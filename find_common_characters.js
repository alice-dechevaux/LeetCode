//05/06/2024

// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

 

// Example 1:

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]

// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

 

// Constraints:

//     1 <= words.length <= 100
//     1 <= words[i].length <= 100
//     words[i] consists of lowercase English letters.

var commonChars = function(words) {
    let last = count(words[0]);
    for (let i = 1; i < words.length; i++) {
        last = intersection(last, count(words[i]));
    }

    const result = [];
    for (let i = 0; i < 26; i++) {
        while (last[i] > 0) {
            result.push(String.fromCharCode(i + "a".charCodeAt(0)));
            last[i]--;
        }
    }
    return result;
};

function count (word) {
        const frequency = Array(26).fill(0);

    for (let letter of word) {
        frequency[letter.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    return frequency;
}

function intersection(freq1, freq2) {
    return freq1.map((f1, idx) => Math.min(f1, freq2[idx]));
}