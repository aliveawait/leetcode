/*
  2414. 最长的字母序连续子字符串的长度

  字母序连续字符串 是由字母表中连续字母组成的字符串。换句话说，
  字符串 "abcdefghijklmnopqrstuvwxyz" 的任意子字符串都是 字母序连续字符串 。

  例如，"abc" 是一个字母序连续字符串，而 "acb" 和 "za" 不是。
  给你一个仅由小写英文字母组成的字符串 s ，返回其 最长 的 字母序连续子字符串 的长度。

  输入：s = "abacaba"
  输出：2
  解释：共有 4 个不同的字母序连续子字符串 "a"、"b"、"c" 和 "ab" 。
  "ab" 是最长的字母序连续子字符串。

*/
/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function(s) {
  let maxLen = 0;
  const length = s.length;
  let index = 0;
  while(index < length) {
    let len = 1;
    while(index < length - 1 && s[index + 1].charCodeAt() - s[index].charCodeAt() === 1) {
      len++;
      index++;
    }
    maxLen = Math.max(maxLen, len);
    index++;
  }
  return maxLen;
};


console.log(longestContinuousSubstring('abcdabcdefabcdefgabcde'));