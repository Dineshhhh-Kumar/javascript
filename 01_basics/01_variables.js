const accountId = 144553
let accountEmail = "dinesh@gmail.com"
var accountPassword = "123456"
accountCity = "jaipur"
let accountState;

//accountId = 2 //not allowed

accountEmail="din@mail.com"
accountPassword="21219"
accountCity="Banglore"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])