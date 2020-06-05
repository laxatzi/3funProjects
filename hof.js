{
'use strict';

const reverseStr = function(str){
   var splittedStr = str.split("");
    splittedStr.reverse();
   return splittedStr.join("");
}

const reverseCityNames = reverseStr;

var cityName = "Thessaloniki";
console.log(reverseStr(cityName)); // "ikinolassehT"
console.log(cityName); // "Thessaloniki"
console.log(reverseCityNames("Athens")); // "snehtA"

}
