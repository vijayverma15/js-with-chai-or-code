const accountId = 12356
let accountEmail="vijay1245@google.com"
var accountPassword="78945"
accountCity="jaipur"
let accountState;

// accountId=2 // not allowed


console.log(accountId);

accountEmail="hdg@.com"
accountPassword="55555"
accountCity="bangluru"

/*
prefer not to use var
bucouse of issue in block scope and functional scope
*/
 console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
