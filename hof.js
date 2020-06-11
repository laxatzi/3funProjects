{
'use strict';

const reverseStr = function(str){
   let splittedStr = str.split("");
    splittedStr.reverse();
   return splittedStr.join("");
}

const reverseCityNames = reverseStr;

let cityName = "Thessaloniki";
console.log(reverseStr(cityName)); // "ikinolassehT"
console.log(reverseCityNames("Athens")); // "snehtA"

}


{
'use strict';
   const numbers = [3,4,12,4];
   // getting sum of numbers with the reduce method
   const sumOfNumbers = function(arr){
      arr.reduce((acc, current)=> acc + current,10)
   }

   console.log(sumOfNumbers(numbers)); //33
}// end block



{
   'use strict';
   const numbers = [3,4,12,4];
   let sumOfNumbers = 10;

   const sumOfArr = function(arr){
      for(let i = 0; i<arr.length; i++){
         sumOfNumbers += arr[i];
      }
      return sumOfNumbers;
   }
console.log(sumOfNumbers); // 10 -- The initial value
sumOfArr(numbers); // Invoce the function
console.log(sumOfNumbers); // 33 -- Calling the function has side effects sumOfNumbers value in the global scope


}// end block



{
   let pets = [
      {type:'Dog', name:'Rocky', age:3},
      {type:'Cat', name:'Lucas', age:7},
      {type:'Cat', name:'Mark', age:6},
      {type:'Dog', name:'Diego', age:5},
      {type:'Dog', name:'Gloria', age:6},
      {type:'Cat', name:'Mat', age:4},
   ];

// Filter dog objects
 const getDogs = function(arr){
     return arr.filter((el)=> el.type === 'Dog');
       };

// Find average age
 const ageAvg = function(arr) {
     return arr.reduce((acc, currentV)=> (acc + currentV.age ),0) / arr.length;
   };

// Find average age of dogs particularly 
 const dogAvgAge = ageAvg(getDogs(pets));
  
   console.log(`My dogs' average age is ${dogAvgAge.toFixed(2)}`);

 }//block