//数据流、队列
var MovingAverage = function(size) {
  this.nums = [];
  this.capacity = size;
  this.sum = 0;
};

MovingAverage.prototype.next = function(val) {
  this.nums.push(val);
  this.sum += val;
  if (this.nums.length > this.capacity) {
    this.sum -= this.nums.shift();
  }
  return this.sum / this.nums.length;
};