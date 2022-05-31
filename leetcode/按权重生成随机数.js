var Solution = function(w) {
  this.n = w.length;
  this.pre = w.slice();
  for (let i = 0, pre = 0; i < this.n; i++) {
      pre = this.pre[i]+= pre;
  }
  this.max = this.pre[this.n-1];
};

/**
* @return {number}
*/
Solution.prototype.pickIndex = function() {
  const target = Math.ceil(Math.random() * this.max);
  let l = 0, r = this.n - 1;
  while (l < r) {
      const mid = l + ((r - l) >> 1);
      if (target <= this.pre[mid]) r = mid;
      else l = mid + 1;
  }
  return l;
};