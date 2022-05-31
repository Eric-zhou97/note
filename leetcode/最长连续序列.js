//未完成
//https://leetcode-cn.com/problems/WhsWhI/
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0 
     let arr = nums.sort((a, b) => a - b) // 排序
     let i = 0, val = 1
     let res = []
 
     while (i < arr.length) {
         if (arr[i] + 1 === arr[i + 1]) {
             val++
         } else if (arr[i] !== arr[i + 1]) { // 有可能存在相同元素 [0,1,1,2]
             res.push(val)
             val = 1
         }
         i++
     }
     return Math.max(...res, val) // 由于可能存在最后一位满足条件，所以求最大值时，需计算val的值
 
 };
