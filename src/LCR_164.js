/*
闯关游戏需要破解一组密码，闯关组给出的有关密码的线索是：

一个拥有密码所有元素的非负整数数组 password
密码是 password 中所有元素拼接后得到的最小的一个数
请编写一个程序返回这个密码。

输入: password = [15, 8, 7]
输出: "1578"
*/
/**
 * @param {number[]} password
 * @return {string}
 */
var crackPassword = function (password) {
  let strArr = password.map((item) => String(item));
  console.log(strArr);
  strArr.sort((a, b) => (a < b ? -1 : 1));
  console.log(strArr);
  return strArr.join('');
};

console.log(crackPassword([115, 18, 17, 3, 4, 21]));
