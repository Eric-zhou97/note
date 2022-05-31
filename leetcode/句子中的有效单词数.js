//正则表达式需要学习
var countValidWords = function(sentence) {
  sentence = sentence.split(' ');
  sentence = sentence.filter(item => item.length);
  // console.log(sentence);
  let numReg = /[0-9]/;
  let smallCaseReg = /[a-z]/;
  let biaodianReg = /[.!,]/;
  sentence = sentence.filter(item=> {
      let caseNum = 0;
      
      // 仅由小写字母、连字符和/或标点（不含数字）
      if (numReg.test(item) == false) {
          // return true;
          caseNum++;
      }

      let tmp = item.split('');
      // 至多一个 连字符 '-' 。如果存在，连字符两侧应当都存在小写字母（"a-b" 是一个有效单词，但 "-ab" 和 "ab-" 不是有效单词）。
      let test2Num = 0;
      for (let i = 0; i < tmp.length; i++) {
          if (tmp[i] == '-') {
              if (tmp[i - 1] !== undefined && tmp[i + 1] !== undefined && smallCaseReg.test(tmp[i - 1]) && smallCaseReg.test(tmp[i + 1])) {
                  test2Num++;
              } else {
                  test2Num = Infinity;
              }
          }
      }
      if (test2Num <= 1) {
          // return true;
          caseNum++;
      }
      
      // 至多一个 标点符号。如果存在，标点符号应当位于 token 的 末尾 。
      let test3Num = 0;
      for (let i = 0; i < tmp.length; i++) {
          if (biaodianReg.test(item[i])) {
              if (i == tmp.length - 1) {
                  test3Num++;
              } else {
                  test3Num = Infinity;
              }
          }
      }
      if (test3Num <= 1) {
          // return true;
          caseNum++;
      }

      if (caseNum == 3) {
          return true;
      }
      return false;
  })
  return sentence.length;
};