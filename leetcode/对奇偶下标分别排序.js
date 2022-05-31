var sortEvenOdd = function(nums) {
  let N = nums.length
  let odd = [], even = []
  for (let i = 0; i < N; i++) {
      if (i % 2) odd.push(nums[i])
      else even.push(nums[i])
  }
  odd.sort((l, r) => r - l)
  even.sort((l, r) => l - r)
  let ans = []
  for (let i = 0; i < even.length; i++) {
      ans.push(even[i])
      if (i < odd.length) {
          ans.push(odd[i])
      }
  }
  return ans
};