//默认是排序的，因此只要判断是不是每一个都比后一个小即可，反证
var isAlienSorted = function(words, order) {
  for (let i = 0; i < words.length - 1; i++) {
      let len = Math.min(words[i].length, words[i + 1].length);
      for (let j = 0; j < len; j++) {
          let indexI = order.indexOf(words[i][j]);
          let indexIadd = order.indexOf(words[i + 1][j]);
          if (indexI < indexIadd) {
              break;
          } else if (indexI > indexIadd) {
              return false;
          }
          if (j === (len - 1) && words[i].length > words[i + 1].length) {
              return false;
          }
      }
  }
  return true;
};