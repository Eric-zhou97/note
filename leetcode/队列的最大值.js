//队列
var MaxQueue = function() {
  this.queue1=[];
  this.queue2=[];
};

/**
* @return {number}
*/
MaxQueue.prototype.max_value = function() {
  if(this.queue2.length){
      return this.queue2[0];
  }
  return -1;
};

/** 
* @param {number} value
* @return {void}
*/
MaxQueue.prototype.push_back = function(value) {
  this.queue1.push(value);
  while(this.queue2.length&&this.queue2[this.queue2.length-1]<value){
      this.queue2.pop();
  }
  this.queue2.push(value);
};

/**
* @return {number}
*/
MaxQueue.prototype.pop_front = function() {
  if(!this.queue1.length){
      return -1;
  }
  let value=this.queue1.shift();
  if(value==this.queue2[0]){
      this.queue2.shift();
  }
  return value;
};