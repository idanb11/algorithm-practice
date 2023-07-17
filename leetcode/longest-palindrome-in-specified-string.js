/*
* Write a JavaScript function that returns the longest palindrome in a given string.

Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
* */

function isPalindrome(str1) {
  return str1 === str1.split("").reverse().join("");
}

function longestPalindrome(str1) {
  let max_length = 0;
  let maxp = '';

  for (let i = 0; i < str1.length; i++) {
    const subs = str1.substr(i, str1.length);

    for (let j = subs.length; j >= 0; j--) {
      const sub_subs_str = subs.substr(0, j);
      if (sub_subs_str.length <= 1) {
        continue;
      }

      if (isPalindrome(sub_subs_str)) {
        if (sub_subs_str.length > max_length) {
          max_length = sub_subs_str.length;
          maxp = sub_subs_str;
        }
      }
    }
  }

  return maxp;
}

console.log(longestPalindrome("abracadabra"));

// console.log(longestPalindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));
