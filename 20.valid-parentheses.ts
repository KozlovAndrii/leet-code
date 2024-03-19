/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(input: string): boolean {
  const closedToOpened = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const openedParentheses: string[] = [];

  for (const char of input) {
    if (["(", "{", "["].includes(char)) {
      openedParentheses.push(char);
      continue;
    }

    if (
      closedToOpened[char] != openedParentheses[openedParentheses.length - 1]
    ) {
        return false
    }

    openedParentheses.pop()
  }

  return openedParentheses.length == 0;
}
// @lc code=end
