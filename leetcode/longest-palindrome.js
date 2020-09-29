/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
  let counter = 0;
  let didUseOdd = false;
  const map = {};

  if (!s || s.length === 1) {
    return s.length;
  }

  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    map[element] = (map[element] || 0) + 1;
  }

  
  const values = Object.values(map).sort((a, b) => b - a);
  // console.log(values);

  for (const value of values) {
    // console.log(value);
    if (value % 2 === 0) {
      counter += value;
      console.log(value);

    } else if (!didUseOdd) {
      counter += value;
      didUseOdd = true;
      console.log(value);

    }
  }

  return counter;
};

// console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));
// console.log(longestPalindrome("a"));
