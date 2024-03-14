/*

给你一个下标从 0 开始、由正整数组成的数组 nums 。

你可以在数组上执行下述操作 任意 次：

选中一个同时满足 0 <= i < nums.length - 1 和 nums[i] <= nums[i + 1] 的整数 i 。
将元素 nums[i + 1] 替换为 nums[i] + nums[i + 1] ，并从数组中删除元素 nums[i] 。
返回你可以从最终数组中获得的 最大 元素的值。


输入：nums = [2,3,7,9,3]
输出：21
解释：我们可以在数组上执行下述操作：
- 选中 i = 0 ，得到数组 nums = [5,7,9,3] 。
- 选中 i = 1 ，得到数组 nums = [5,16,3] 。
- 选中 i = 0 ，得到数组 nums = [21,3] 。
最终数组中的最大元素是 21 。可以证明我们无法获得更大的元素。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxArrayValue = function (nums) {
  const length = nums.length;
  let index = length - 1;
  let maxEle = 0;
  while (index >= 0) {
    let sum = nums[index];
    while (index > 0 && sum > nums[index - 1]) {
      sum += nums[index - 1];
      index--;
    }
    maxEle = Math.max(maxEle, sum);
    index--;
  }
  return maxEle;
};
