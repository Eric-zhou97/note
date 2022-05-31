var reversePrefix = function(word, ch) {
  const index = word.indexOf(ch);
  if (index >= 0) {
      const arr = [...word];
      let left = 0, right = index;
      while (left < right) {
          const temp = arr[left];
          arr[left] = arr[right];
          arr[right] = temp;
          left++;
          right--;
      }
      word = arr.join('');
  }
  return word;
};