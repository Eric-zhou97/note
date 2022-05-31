var longestDiverseString = function(a, b, c) {
  //或者用数组，数组中的值的类型可以不一样
  //将值与字符进行绑定
  let arr = [
      { str: 'a', count: a },
      { str: 'b', count: b },
      { str: 'c', count: c }
  ], ans = '';
  const last = () => ans.charAt( ans.length - 1 );
  while (true) {
    arr.sort((prev, curr) => curr.count - prev.count);  
    let add = null;  
    for (let i = 0; i < 3; i++) {
      let obj = arr[i];
      if (obj.str === last()) continue;
      let { str, count } = obj; 
      if (i === 0) {
        if (count >= 2) {
          add = str.repeat(2);
          obj.count -= 2;
        } else {
          if (count > 0) {
            add = str;
            obj.count -= 1;
          }
        }
      //不是多的字符，只放一个
      } else if (count > 0) {
        add = str;
        obj.count -= 1;
      }
      break;
    }  
    if (!add) break;
    ans += add;
  }
  return ans;
};