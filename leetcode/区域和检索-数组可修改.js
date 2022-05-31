//前缀和暴力
var NumArray = function(nums) {
    this.arr=nums;
    this.count=[];
    this.count[0]=nums[0];
    for(let i=1;i<nums.length;i++){
        this.count[i]=this.count[i-1]+nums[i];
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    let temp=this.arr[index]-val;
    this.arr[index]=val;
    for(let i=index;i<this.count.length;i++){
        this.count[i]=this.count[i]-temp;
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.count[right]-this.count[left]+this.arr[left];
};


//未解决，树状数组
// https://leetcode-cn.com/problems/range-sum-query-mutable/
let tree = []
let n = 0
const buildTree = function (nums) {
  for (let i = n, j = 0; i < 2 * n; i++, j++) {
    tree[i] = nums[j]
  }
  for (let i = n - 1; i > 0; i--) {
    tree[i] = tree[i * 2] + tree[i * 2 + 1]
  }
}
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  if (nums.length > 0) {
    n = nums.length
    tree = new Array(n * 2).fill(0)
    buildTree(nums)
  }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  index += n
  tree[index] = val
  while (index > 0) {
    let left = index, right = index
    if (index % 2 === 0) {
      right = index + 1
    } else {
      left = index - 1
    }
    const idx = index >> 1
    tree[idx] = tree[left] + tree[right]
    index = idx
  }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  left += n
  right += n
  let sum = 0
  while (left <= right) {
    if (left % 2 === 1) {
      sum += tree[left]
      left++
    }
    if (right % 2 === 0) {
      sum += tree[right]
      right--
    }
    left = left >> 1
    right = right >> 1
  }
  return sum
};
