var pancakeSort = function(arr) {
  const ret = [];
  for (let n = arr.length; n > 1; n--) {
      let index = 0;
      for (let i = 1; i < n; i++) {
          //类似冒泡，一次把最大的找出来
          //存下标
          if (arr[i] >= arr[index]) {
              index = i;
          }
      }
      if (index === n - 1) {
          continue;
      }
      reverse(arr, index);
      reverse(arr, n - 1);
      //翻转[0~k-1]
      ret.push(index + 1);
      ret.push(n);
  }
  return ret;
}

const reverse = (arr, end) => {
  for (let i = 0, j = end; i < j; i++, j--) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }
};