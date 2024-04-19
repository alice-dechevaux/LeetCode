//04/19/2024

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:

// Input: head = [1], n = 1
// Output: []

// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

 

// Constraints:

//     The number of nodes in the list is sz.
//     1 <= sz <= 30
//     0 <= Node.val <= 100
//     1 <= n <= sz

var removeNthFromEnd = function(head, n) {
    const newHead = new ListNode();
    newHead.next = head;
    let pointerOne = newHead, pointerTwo = newHead;

    for (let i = 0; i <= n; i++) {
        pointerOne = pointerOne.next;
    }

    while (pointerOne !== null) {
        pointerOne = pointerOne.next;
        pointerTwo = pointerTwo.next;
    }

    pointerTwo.next = pointerTwo.next.next;
    
    return newHead.next;
};