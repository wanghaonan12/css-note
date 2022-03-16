//定义对象
class Player {
  //定义构造函数
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  //定义成员方法
  toPrint() {
    console.log(this.name + '---------' + this.age)
  }
}
//在对象中，this指针指向的就是对象本身。this可以引⽤对象的属性和⽅法
var player1 = new Player('HMM', 21)
player1.toPrint()
