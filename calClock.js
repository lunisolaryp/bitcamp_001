
const readLine = require('readline-sync')

//11:03 각도
console.log('몇 시 인가요?')
const hour = parseInt(readLine.prompt())
console.log('몇 분 인가요?')
const minute = parseInt(readLine.prompt())

const hAngle = (360/12) * (hour%12)
const mAngle = 360/60 * minute

const hMoving = (360/12)/60 * minute

const ttlAngle = Math.abs(hAngle - mAngle + hMoving)

console.log(`지금 시간의 각도는 ${ttlAngle}도입니다.`)