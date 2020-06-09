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
console.log(reverseCityNames("Athens")); // "snehtA"

}

{
'use strict';
   let numbers = [3,4,12,4];
   // getting sum of numbers with the reduce method
   let sumOfNumbers = numbers.reduce(function(accumulator , currentValue){
      return accumulator + currentValue;
   }, 10); 

   console.log(sumOfNumbers); //33
}// end block

{
   'use strict';
   let numbers = [3,4,12,4];
   let sumOfNumbers = 10;
   for(let i = 0; i<arr.length; i++{
      sumOfNumbers += arr[i];
   }
   console.log(sumOfNumbers); // 33
}// end block