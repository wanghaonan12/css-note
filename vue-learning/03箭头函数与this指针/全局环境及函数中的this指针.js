//全局环境中的this指针
/* ;(function () {
  console.log(this === window) //true
})()
 */
// console.log(this.document === document) //true
//在对象中，this指针指向的就是对象本身。this可以引⽤对象的属性和⽅法

//函数中的this指针
//谁调⽤函数，函数内的this指针就指向谁
/* function test1() {
  return this
}
console.log(test1() == window) //true
console.log(window.test1() == window) //true
function test2() {
  //在严格模式下，this指针为undefined
  //使用严格模式
  //在⾮严格模式下，this指向window全局对象
  'use strict'
  return this
}
console.log(test2() == undefined) //true
console.log(window.test2 == window) //true */

//加入setTimeout定时器
class Player {
  constructor(nickname, age) {
    this.nickname = nickname
    this.age = age
  }
  toPrint() {
    window.setTimeout(() => {
      console.log(this.nickname + '-------' + this.age)
    }, 1000)
  }
}
let player1 = new Player('hmm', 21)
player1.toPrint()
