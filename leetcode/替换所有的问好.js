var modifyString = function(s) {
  let codes = Array(26).fill(0).map((t,i) => String.fromCharCode(i + 97))
  let list = s.split('')
  for(let i = 0; i < list.length; i++){
      if (list[i] === '?') {
          for(let j=0;j<26;j++){
              //超了界限得到的结果是undefined，没问题，只要有定义并且定义不冲突即可
              if (codes[j] !== list[i - 1] && codes[j] !== list[i + 1]) {
                  list[i] = codes[j]
                  break;
              }
          }
      }
  }
  return list.join('')
};