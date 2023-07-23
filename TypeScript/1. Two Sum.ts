/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Input: nums = [3,2,4], target = 6
Output: [1,2]
*/

function twoSum(nums: number[], target: number): number[] {
  const numMap: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    if (complement in numMap) {
      return [numMap[complement], i];
    }
    numMap[num] = i;
  }
  return [];
}
console.log(twoSum([2, 7, 11, 15], 9));