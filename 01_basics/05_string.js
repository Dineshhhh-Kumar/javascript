const name ="Dinesh"
const repoCount=50

//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

const gameName = new String('Dinesh');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,2)
console.log(newString);

const anotherString = gameName.slice(-6,4)
console.log(anotherString);

const newStringOne= "   Dinesh    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url ="https://dinesh.com/dinesh%20kumar"

console.log(url.replace('%20','_'));

console.log(url.includes('dinesh'));

console.log(url.split('/'));


