const names = require("./4-names"); // invoking the module
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");

sayHi(names.Mohit);
sayHi(names.Rahul);
sayHi("Tanu");

console.log(require("./7-mind-grenade").num1);
