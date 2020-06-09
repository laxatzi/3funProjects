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
   for(let i = 0; i<numbers.length; i++){
      sumOfNumbers += numbers[i];
   }
   console.log(sumOfNumbers); // 33
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

   // check if it is dog or cats

      const isDog = (el)=> el.type === 'Dog';
      const isCat = (el)=> el.type === 'Cat';
   // test
      console.log(isDog(pets[1]));

 const getDogs = function(arr){
     return arr.filter(isDog)
       };
   console.log(getDogs(pets));
   const getCats = function(pets){ 
     return pets.filter(isCat);
    };

 const dogAvg = function(arr) {
     return arr.reduce((acc, currentV)=> (acc + currentV.age ) / arr.length , 0);
   };

 const catAvg = function(arr){
      return arr.reduce((acc, currentV)=> acc + currentV.age / arr.length, 0 );
   };
 const dogAvgAge = dogAvg(pets);
 const catAvgAge = catAvg(pets)
  
   console.log(catAvgAge);

 }//block