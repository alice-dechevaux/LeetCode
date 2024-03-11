//03/11/2024

// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

 

// Example 1:

// Input: cost = [10,15,20]
// Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.

// Example 2:

// Input: cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6
// Explanation: You will start at index 0.
// - Pay 1 and climb two steps to reach index 2.
// - Pay 1 and climb two steps to reach index 4.
// - Pay 1 and climb two steps to reach index 6.
// - Pay 1 and climb one step to reach index 7.
// - Pay 1 and climb two steps to reach index 9.
// - Pay 1 and climb one step to reach the top.
// The total cost is 6.

 

// Constraints:

//     2 <= cost.length <= 1000
//     0 <= cost[i] <= 999

var minCostClimbingStairs = function(cost) {
    cost.push(0)
   for(let i=cost.length-4;i>=0;i--){
       cost[i]+=Math.min(cost[i+1],cost[i+2])
   }
     return Math.min(cost[0],cost[1])

};
[1, 2, 5, 3, 6, 1, 7]
//This solution works by starting from the top and working backwards. It starts three steps down and determines the minimum cost to reach the top from there. Since you must step on one of the stairs to get to the top, the minimum cost is the lower priced stair plus the price of the third stair down. The value stored at this index is then updated so it can be used by alternate routes as well. Thus when we decrement i and check the next lowest stair, we compare the cost of skipping to the second stair down, which would allow us to then skip the top stair, or paying the minimum cost to reach the top via the next index down, which has been updated in the previous step. This process continues until we reach the first index of the array. The function then compares the values at index 0 and index 1, which represent the minimum cost to reach the top from those indexes, and returns that value. This problem is an example of dynamic programming