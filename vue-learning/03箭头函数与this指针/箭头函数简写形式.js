/* 箭头函数的写法更为简便，
箭头左侧定义参数，
箭头右侧定义函数体。
当函数体为⼀⾏内容时，
return关键字可以省略 */

let noParam = function () {
  return 7
}
//无参箭头函数
let noParamA = () => 7

let sum = function (num1, num2) {
  return num1 + num2
}
//带参数的箭头函数
var sumA = (num1, num2) => num1 + num2

let sumAdd5 = function (num1, num2) {
  num1 = num1 + 5
  num2 = num2 + 5
  return num1 + num2
}
//多行函数体的箭头函数
let sumAdd5A = (num1, num2) => {
  num1 = num1 + 5
  num2 = num2 + 5
  return num1 + num2
}
