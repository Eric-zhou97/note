// https://leetcode-cn.com/problems/couples-holding-hands/solution/qing-lu-qian-shou-by-leetcode-solution-bvzr/
// https://leetcode-cn.com/problems/gcd-sort-of-an-array/solution/bing-cha-ji-fen-jie-zhi-yin-shu-by-xin-x-ylsz/

var gcdSort = function(nums) {
  //p,find,merge是并查集
  //素数并查集
  var p = new Array(100000).fill(0).map((element, index) => index);
  var find = (x) => {
      //素数中作为并查集区分的基数
      if (p[x] === x) {
          return x;
      }
      const newf = find(p[x]);
      p[x] = newf;
      return newf;
  }
  var merge = (x, y) => {
      const fx = find(x);
      const fy = find(y);
      p[fx] = fy;
  }
  
  //复制数组
  var copyArr=function(arr) {
      let res = []
      for (let i = 0; i < arr.length; i++) {
      res.push(arr[i])
      }
      return res
  }



  let nums1 = copyArr(nums);
  for (let i = 1; i < nums.length; i++) p[i] = i;
  // 分解质因数
  for (let c of nums) {
      let k = c;
      for (let i = 2; i <= c / i; i++) {
          let flag = false;
          while (c % i == 0)
              c /= i, flag = true;
          if (flag)
              merge(k, i);
      }
      // 合并质因子
      if (c > 1)
          merge(k, c);
  }
  nums1.sort((a, b) => {
      //1为交换，-1为不交换 
      return a-b;
  })

  // 对比原数组
  for (let i = 0; i < nums1.length; i++) {
      if (nums1[i] == nums[i])    continue;
      if (find(nums1[i]) != find(nums[i]))    return false;
  }
  return true;
};