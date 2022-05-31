var Trie = function() {
  this.children={};
};

/**
* Inserts a word into the trie. 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let node=this.children;
  for(let c of word){
      if(!node[c]){
          node[c]={};
      }
      node=node[c];
  }
  node.isEnd=true;
};


Trie.prototype.searchPrefic = function(prefix) {
  let node=this.children;
  for(let c of prefix){
      if(!node[c]){
          return false;
      }
      node=node[c];
  }
  return node;
};

Trie.prototype.search = function(word) {
  let node =this.searchPrefic(word);
  return node!==undefined&&node.isEnd!=undefined;
};

/**
* Returns if there is any word in the trie that starts with the given prefix. 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  return this.searchPrefic(prefix)
};



//另解
//可以换为树形图
class TreeNode {
  constructor(){
      this.children = {};
      this.isWord = false;
  }
}

/**
* Initialize your data structure here.
*/
var Trie = function() {
  this.root = new TreeNode();
};

/**
* Inserts a word into the trie. 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let current = this.root;
  for(const w of word){
      // const index = w.charCodeAt() - 97;
      if(current.children[w] == null){
          current.children[w] = new TreeNode();
      }
      current = current.children[w];
  }
  current.isWord = true;
};

/**
* Returns if the word is in the trie. 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
 const current = this.find(word);
 return current != null && current.isWord;
};

/**
* Returns if there is any word in the trie that starts with the given prefix. 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
 const current = this.find(prefix);
 return current != null;
};
Trie.prototype.find = function(str) {
  let current = this.root;
  for(const s of str){
      //  const index = s.charCodeAt() - 97;
      current = current.children[s]
      if( current == null){
         return null;
      }
  }

  return current;
};