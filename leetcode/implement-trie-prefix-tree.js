const Trie = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let root = this.root;
  for (const char of word) {
    if (!root[char]) {
      root[char] = {};
    }
    root = root[char];
  }
  root.isEnded = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let root = this.root;
  for (const char of word) {
    if (root[char]) {
      root = root[char];
    }
  }
  return root.isEnded || false;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let root = this.root;
  for (const char of prefix) {
    if (root[char]) {
      root = root[char];
    } else {
      return false;
    }
  }
  return true;
};

// Your Trie object will be instantiated and called as such:
const obj = new Trie();
console.log(obj);

obj.insert("apple");

console.dir(obj, { depth: null });
// const param_2 = obj.search(word);
// const param_3 = obj.startsWith(prefix);
