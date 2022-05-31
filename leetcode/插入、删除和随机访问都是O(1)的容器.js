var RandomizedSet = function() {
  this.data={};

};

/**
* Inserts a value to the set. Returns true if the set did not already contain the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if(this.data[val]!=undefined){
      return false;
  }
  this.data[val]=val;
  return true;

};

/**
* Removes a value from the set. Returns true if the set contained the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  if(this.data[val]==undefined) return false;
  delete this.data[val];
  return true;
};

/**
* Get a random element from the set.
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  //取map的长度
  //对Map()也可行
  let size =Object.keys(this.data).length;
  for(let k in this.data) {
      if(Math.random()<=1/size--) return this.data[k];
  }
};


//另解
var RandomizedSet = function() {
  this.map = new Map()
  this.list = []
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.map.has(val)) {
    return false
  }
  this.list.push(val)
  this.map.set(val, this.list.length - 1)
  return true
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.map.has(val)) {
    return false
  }
  const index = this.map.get(val)
  this.map.delete(val)

  //向前移动来删除
  const lastIndex = this.list.length - 1
  if (index !== lastIndex) {
    this.list[index] = this.list[this.list.length - 1]
    this.map.set(this.list[index], index)
  }
  //这里改变了长度了
  this.list.pop()
  return true
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const index = Math.floor(Math.random() * this.list.length)
  console.log(this.list.length)
  //0~len-1,满足
  return this.list[index]
    
};