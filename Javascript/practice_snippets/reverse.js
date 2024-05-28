 let num=-12345000
// let num=-12345000.987
const reversedNum=parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
console.log(reversedNum)
