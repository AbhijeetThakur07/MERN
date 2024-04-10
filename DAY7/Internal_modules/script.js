const fs=require('fs');

const data=fs.readFileSync('./myReadMe.txt');  //Use 'UTF-8'--> './myReadMe.txt','Here.......'

console.log(data);
// console.log(data.toString()); This is the second method to print encoded message

