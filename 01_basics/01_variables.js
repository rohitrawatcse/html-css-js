const accountId = 144553
let accountEmail = "rohit@noida.com"
var accountPassword = "12345"
accountCity = "Noida"
let accountState;

// accountId = 2 // not allowed


accountEmail = "admin@noida.com"
accountPassword = "21212121"
accountCity = "Noida"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])