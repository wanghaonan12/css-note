//定义对象
function Player(name, age) {
  this.name = name
  this.age = age
}
//定义对象的成员函数
//使用构造函数，prototype（原型）,依靠原型链实现继承（不面向对象）
Player.prototype.toPrint = function () {
  console.log(this.name + '------' + this.age)
}
var player1 = new Player('james', 35)
var player2 = new Player('kobe', 39)
//调用成员函数
player1.toPrint()
player2.toPrint()
