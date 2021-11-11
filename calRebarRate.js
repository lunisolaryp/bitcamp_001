const readLine = require('readline-sync')
// width: 300cm, height: 200cm, 1feet = $3.5

console.log('피트 당 철근의 가격은?')
const ftRate = parseFloat(readLine.prompt())

// const cmRate = ftRate/30.48
// console.log(cmRate)

console.log('창문 가로의 길이는?')
const width = parseInt(readLine.prompt())
console.log('창문 세로의 길이는?')
const height = parseInt(readLine.prompt())

const cmLength = (width + height) * 2

const ftLength = Math.ceil(cmLength / 30.48)
// console.log(ftLength)

const ttlRate =  ftLength * ftRate
console.log(`총 가격은 $${ttlRate}입니다.`)



