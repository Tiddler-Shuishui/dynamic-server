const fs = require('fs')
const usersString = fs.readFileSync("./db/users.json").toString()
const usersArray = JSON.parse(usersString)
console.log(usersString)
console.log(typeof usersString)
console.log(usersArray)
console.log(typeof usersArray)

const user = {id: 3,name:"tom",password:"ttt"}
usersArray.push(user)
const string = JSON.stringify(usersArray)
fs.writeFileSync("./db/users.json",string)