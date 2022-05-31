//i作为set的下标，set转为数组arr，arr[i]作为map的key
var kSmallestPairs = function(nums1, nums2, k) {
  let set=new Set();
  let map=new Map();
  for(let n1 of nums1){
      for(let n2 of nums2){
          let temp=n1+n2;
          set.add(temp);
          if(!map.has(temp)){
              map.set(temp,[]);
          }
          map.get(temp).push([n1,n2])
      }
  }
  let arr=Array.from(set);
  arr.sort((a, b) => {
    return a-b;
  })
  let ans=[];
  let i=0;
  while(k>0&&i<arr.length){
      while(map.get(arr[i]).length&&k>0){
          ans.push(map.get(arr[i]).shift());
          k--;
      }
      i++;
  }
  return ans;
};

//另解，堆排序
//未理解
var kSmallestPairs = function (nums1, nums2, k) {
  const heapArr = [], res = []
  const len1 = Math.min(nums1.length, k), len2 = Math.min(nums2.length, k)
  for (let i = 0; i < len1; i++) {
      heapArr.push([i, 0])
  }
  createHeap(heapArr, nums1, nums2)
  while (heapArr.length && res.length !== k) {
      const [a, b] = heapArr.shift()
      res.push([nums1[a], nums2[b]])
      if (b + 1 < len2) heapArr.unshift([a, b + 1])
      shiftDowm(heapArr, 0, heapArr.length, nums1, nums2)
  }
  return res
};

function createHeap(arr, nums1, nums2) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      shiftDowm(arr, i, arr.length, nums1, nums2)
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function compare(arr, i, j, nums1, nums2) {
  const [a, b] = arr[i], [c, d] = arr[j]
  return nums1[a] + nums2[b] - nums1[c] - nums2[d]
}


function shiftDowm(arr, i, length, nums1, nums2) {
  for (let j = 2 * i + 1; j < length; j = 2 * j + 1) {
      if (j + 1 < length && compare(arr, j, j + 1, nums1, nums2) > 0) {
          j++
      }
      if (compare(arr, i, j, nums1, nums2) > 0) {
          swap(arr, i, j)
          i = j
      } else {
          break
      }
  }
}