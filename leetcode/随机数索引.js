var Solution = function(nums) {
  this.pos = new Map();
  for (let i = 0; i < nums.length; ++i) {
      if (!this.pos.has(nums[i])) {
          this.pos.set(nums[i], []);
      }
      
      this.pos.get(nums[i]).push(i);
  }
};

Solution.prototype.pick = function(target) {
  const indices = this.pos.get(target);
  return indices[Math.floor(Math.random() * indices.length)];
};


//另解，问题：几率其实不一样，极端情况，可能返回-1
var Solution = function(nums) {
  this.nums = nums;
};
Solution.prototype.pick = function(target) {
let res=-1, count =0;
for(let i = 0; i<this.nums.length; i++){ 
  if(this.nums[i] !== target){
      continue;
  }
  count++;
  if(0===getRandomInt(count)){
      res = i;
  }
}
return res;
};

function getRandomInt(max) {
return Math.floor(Math.random() * max);
}