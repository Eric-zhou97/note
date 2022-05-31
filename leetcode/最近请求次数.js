//数据流、队列

var RecentCounter = function() {
  this.time=[];
};

RecentCounter.prototype.ping = function(t) {
  this.time.push(t);
  while(this.time.length&&this.time[0]<t-3000){
      this.time.shift();
  }
  return this.time.length;
};