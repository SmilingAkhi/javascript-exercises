const reverseString = function(string) {
let letters = string.split("");
let reverse = letters.reverse();
let join = reverse.join("");

return join;

};

// Do not edit below this line
module.exports = reverseString;
