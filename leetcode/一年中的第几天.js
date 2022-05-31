//日期处理
var dayOfYear = function(date) {
  const year = +date.slice(0, 4);
  const month = +date.slice(5, 7);
  const day = +date.slice(8);

  const amount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      ++amount[1];
  }

  let ans = 0;
  for (let i = 0; i < month - 1; ++i) {
      ans += amount[i];
  }
  return ans + day;
};

//另解，更快
var dayOfYear = function(date) {
  function isLeepYear(year) {
    return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
  }
  var date = new Date(date);
  var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  var count = 0;
  for (var i = 0; i < month; i++) {
    count += days[i];
  }
  return isLeepYear(year) && month > 1 ? (count + day + 1) : (count + day);
};