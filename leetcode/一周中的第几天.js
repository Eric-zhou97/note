//js中的Date对象有众多方法，getDate(),getDay()等
var dayOfTheWeek = function(day, month, year) {
  let Stamp = new Date(year + '-' + month + '-' + day);
  let weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weeks[Stamp.getDay()];
};
