const fs = require('fs')

//读
var usersString = fs.readFileSync('./db/data.json').toString()
const usersArray = JSON.parse(usersString)


//存数据
const addUser = {id:3,name:'杨哈哈',password:'ccc'}
usersArray.push(addUser)
const string = JSON.stringify(usersArray)
fs.writeFileSync('./db/data.json',string)
console.log(usersString)
console.log(usersArray)
usersString = fs.readFileSync('./db/data.json').toString()
console.log(usersString)