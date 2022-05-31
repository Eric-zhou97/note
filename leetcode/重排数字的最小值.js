var smallestNumber = function(num) {
  let str = num + ''
  let arr = [...str]
  if (num === 0) return 0
  if (num > 0) {
      arr.sort((l, r) => l - r)
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] !== "0") {
              //0与后面一个非0的交换
              //开头不为0则与自身交换
              swap(arr, i, 0)
              return arr.join('')
          }
      }
  }
  arr.sort((l, r) => r - l)
  //'-'直接参与排序
  //num为整数，必定包含非0数值
  return arr.join('')
  function swap(arr, i, j) {
      let tmp = arr[i]
      arr[i] = arr[j]
      arr[j] = tmp
  }
};