{
   // functions should not only be abstract but also non-altering regarding the underlying data they deal with.

const reverseStr = function(str){
   var arrFromStr = str.split("");
   arrFromStr.reverse();
   return arrFromStr.join("");
}

const reverseNames = reverseStr;

// the above function does NOT change the value of the provided as an argument string
var string = "Thessaloniki";
console.log(reverseStr(string)); // "ikinolassehT"
console.log(string); // "Thessaloniki"
console.log(reverseNames('Maria')); // "airaM"
}
