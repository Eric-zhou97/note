var toGoatLatin = function(sentence) {
  const vowels = new Set( ['a','e','i','o','u','I','O','E','A','U']);
  const n = sentence.length;
  let i = 0, cnt = 1;
  ans = '';

  while (i < n) {
      let j = i;
      while (j < n && sentence[j] !== ' ') {
          ++j;
      }

      ++cnt;
      //不是第一个
      if (cnt !== 2) {
          ans += ' ';
      }
      if (vowels.has(sentence[i])) {
          ans += sentence.substring(i, j);
      } else {
          ans += sentence.slice(i + 1, j);
          ans += sentence[i];
      }
      ans += 'm';
      ans+='a'.repeat(cnt);

      i = j + 1;
  }
  return ans;
};