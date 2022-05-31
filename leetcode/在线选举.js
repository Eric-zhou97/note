//未完成
var TopVotedCandidate = function(persons, times) {
  this.tops = [];
  this.voteCounts = new Map();
  this.voteCounts.set(-1, -1);
  this.times = times;
  let top = -1;
  for (let i = 0; i < persons.length; ++i) {
      const p = persons[i];
      if (!this.voteCounts.has(p)) {
          this.voteCounts.set(p, 0);
      } else {
          this.voteCounts.set(p, this.voteCounts.get(p) + 1);
      }
      if (this.voteCounts.get(p) >= this.voteCounts.get(top)) {
          top = p;
      }
      this.tops.push(top);
  }
};

//二分法，找到小于等于的最大的
TopVotedCandidate.prototype.q = function(t) {
  let l = 0, r = this.times.length - 1;
  // 找到满足 times[l] <= t 的最大的 l
  while (l < r) {
      const m = l + Math.floor((r - l + 1) / 2);
      if (this.times[m] <= t) {
          l = m;
      } else {
          r = m - 1;
      }
  }

  return this.tops[l];
};

//二分，找到大于等于的最小的
//向上取，靠right=mid-1下来，因此left可以等于mid而不需要加一
let mid= l + Math.floor((r - l + 1) / 2);
let count=0;
for(let t of time){
  count=count+Math.floor(mid/t);
}
if(count<totalTrips){
  l=mid;
}else{
  r=mid-1;
}