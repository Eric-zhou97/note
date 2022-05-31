//暴力
var findAllConcatenatedWordsInADict = function (words) {
  let set = new Set();
  let res = [];
  let getWord = function (word, start) {
    for (let str = '', len = word.length - 1; start <= len; ++start) {
      str += word[start]
      //递归找下一个单词
      if (set.has(str) && (start === len || getWord(word, start + 1))) {
        return true;
      }
    }
    return false;
  }
  words.sort((a, b) => a.length - b.length);
  set.add(words[0]);
  for (let i = 1, len = words.length; i < len; ++i) {
    if (getWord(words[i], 0)) {
      res.push(words[i])
    } else {
      set.add(words[i])
    }
  }
  return res;
};

//另解
//未解决
var findAllConcatenatedWordsInADict = function(ws) {
  const ans = [], trie = new Trie();
  ws.sort((a, b) => a.length - b.length);
  for (const w of ws) {
    if (w === '') continue;
    if (trie.isConcatWord(w)) ans.push(w);
    trie.insert(w);
  }
  return ans;
};

class TrieNode {
  constructor() {
    this.children = Array(26), this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(w) {
    let cur = this.root;
    for (let i = 0; i < w.length; i++) {
      const idx = w[i].charCodeAt() - 'a'.charCodeAt();
      if (!cur.children[idx]) cur.children[idx] = new TrieNode();
      cur = cur.children[idx];
    }
    cur.end = true;
  }
  isConcatWord(w) {
    const vis = Array(w.length).fill(0);
    return this.dfs(w, 0, vis);
  }
  dfs(w, begin, vis) {
    let cur = this.root;
    const len = w.length;
    if (begin === len) return true;
    if (vis[begin]) return false;
    for (let i = begin; i < len; i++) {
      const idx = w[i].charCodeAt() - 'a'.charCodeAt();
      if (!cur.children[idx]) break;
      cur = cur.children[idx];
      if (cur.end) if (this.dfs(w, i + 1, vis)) return true;
    }
    vis[begin] = true;
    return false;
  }
}