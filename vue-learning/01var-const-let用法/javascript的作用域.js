if (true) {
  //externalVal没有作用域
  var externalVal = 'externalVal'
}
function domainTest() {
  var funVal = 'funVal'
  console.log(externalVal + '---------' + funVal)
}
domainTest()
if (true) {
  console.log(externalVal) //可以访问到externalVal
  //console.log(funVal);这一行访问不到变量，报错
  //funVal定义在函数里面，只有在函数里面才能起到作用
}
