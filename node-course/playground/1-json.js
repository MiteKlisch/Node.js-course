const fs = require('fs');

/*const book ={
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

const parseData = JSON.parse(bookJSON);
console.log('Author: ',parseData.author);

fs.writeFileSync('1-json.json', bookJSON); */

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = "Vova"
user.age = '19';

const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON); 