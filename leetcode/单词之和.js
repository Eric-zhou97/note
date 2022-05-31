//未完成
//https://leetcode-cn.com/problems/z1R5dt/
var MapSum = function() {
  this.obj = {};
};

/** 
* @param {string} key 
* @param {number} val
* @return {void}
*/
MapSum.prototype.insert = function(key, val) {
  this.obj[key] = val;
};

/** 
* @param {string} prefix
* @return {number}
*/
MapSum.prototype.sum = function(prefix) {
  let result = 0;

  // 将 prefix 前缀 存入前缀树
  let root = {};
  let cur = root;
  for(let s of prefix) {
      if(!cur[s]) cur[s] = {};
      cur = cur[s];
  }
  cur.flag = true; // 标记

  // 遍历对象中的属性，是否以 prefix 为前缀
  for(let key in this.obj) {
      let current = root;
      for(let s of key) {
          if(!current[s]) break; // 找到标记的小尾巴
          current = current[s];
      }
      if(current.flag) result += this.obj[key];
  }
  return result;
};