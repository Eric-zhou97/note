//未完成
//https://leetcode-cn.com/problems/stock-price-fluctuation/
var StockPrice = function() {
  this.maxTime = 0
  this.timeMap = new Map()
  this.maxPrice = new PriorityQueue((a, b)=>a[0] - b[0] > 0)
  this.minPrice = new PriorityQueue((a, b)=>a[0] - b[0] < 0)
};

/** 
* @param {number} timestamp 
* @param {number} price
* @return {void}
*/
StockPrice.prototype.update = function(timestamp, price) {
  this.maxTime = Math.max(timestamp, this.maxTime)
  this.timeMap.set(timestamp, price)
  this.maxPrice.offer([price, timestamp])
  this.minPrice.offer([price, timestamp])
};

/**
* @return {number}
*/
StockPrice.prototype.current = function() {
  return this.timeMap.get(this.maxTime)
};

/**
* @return {number}
*/
StockPrice.prototype.maximum = function() {
  while(true){
      const cur = this.maxPrice.peek()
      if(this.timeMap.get(cur[1]) === cur[0])
          return cur[0]
      this.maxPrice.poll()
  }
};

/**
* @return {number}
*/
StockPrice.prototype.minimum = function() {
  while(true){
      const cur = this.minPrice.peek()
      if(this.timeMap.get(cur[1]) === cur[0])
          return cur[0]
      this.minPrice.poll()
  }
};

/**
* Your StockPrice object will be instantiated and called as such:
* var obj = new StockPrice()
* obj.update(timestamp,price)
* var param_2 = obj.current()
* var param_3 = obj.maximum()
* var param_4 = obj.minimum()
*/

class PriorityQueue {
constructor(
  compare = (a, b) => a < b 
  ){
  this.data = []
  this.size = 0
  this.compare = compare
}

peek() {
  return this.size === 0 ? null : this.data[0] 
}

offer(val) {
  this.data.push(val)
  this._shifUp(this.size++)
}

poll() {
  if(this.size === 0) { return null }
  this._swap(0, --this.size)
  this._shifDown(0)
  return this.data.pop()
}

_parent(index) {
  return index - 1 >> 1
}

_child(index) {
  return (index << 1) + 1
}

_shifDown(index) {
  while(this._child(index) < this.size) {
    let child = this._child(index)
    if(child + 1 < this.size 
      && this.compare(this.data[child + 1], this.data[child])) {
        child = child + 1
    }
    if(this.compare(this.data[index], this.data[child])){
      break
    }
    this._swap(index, child)
    index = child
  }
}

_shifUp(index) {
  while(this._parent(index) >= 0 
  && this.compare(this.data[index], this.data[this._parent(index)])) {
    this._swap(index, this._parent(index))
    index = this._parent(index)
  }
}

_swap(a, b) {
  [this.data[a], this.data[b]] = [this.data[b], this.data[a]]
}
}