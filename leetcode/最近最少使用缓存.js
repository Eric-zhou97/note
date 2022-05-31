var LRUCache = function(capacity) {
  this.map = new Map()
  this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  //每次使用也要重新创建
  if (!this.map.has(key)) {
    return -1
  }
  const value = this.map.get(key)
  this.map.delete(key)
  this.map.set(key, value)
  return value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {
    this.map.delete(key)
  }
  this.map.set(key, value)

  if (this.map.size > this.capacity) {
    //返回最早创建的，是一个队列，每次有变化都会重新创建
    const lastKey = this.map.keys().next().value
    this.map.delete(lastKey)
  }
};