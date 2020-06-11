// Note taking on Peleke Sengstacke's article on Scotchio

  //. wielding pure functions in javascript and function composition

  //. PURE FUNCTIONS
    //. Two things need to be true for a function to be true
      //? 1
      //. A Function can be pure if the only thing it uses to calculate output are 
      //. the arguments you pass it, and local variable declared into the function scope

      //? 2
      //. A function can be pure as long as it does not change state outside of its own scope
      //. If a function does change state outside of its scope it said to have side effects
      //. So a function can be pure if it has no side effects.

      //. Advantages of purity

      //? 1
      //. Pure functions are predictable thus easier to test.
        //. Predictable means always return the same output for a given input.
     //? 2
      //. Pure functions simplify state management.

      // Example:

        {
         'use strict';
          function greetUser(user, greeting="Hello"){
             return `${greeting}, ${user.firstName}!`;
          }
          let user1 = {
             firstName : 'Lambros',
             lastName : 'Hatzinicolaou'
          }
          console.log(greetUser(user1)); // Hello, Lambros!
          console.log(greetUser(user1)); // Hello, Lambros!

        }//end block
        
        // Note all functions are 'predictable' this way
        {
         'use strict';
         let user1 = {
            firstName : 'Lambros',
            lastName : 'Hatzinicolaou'
         }

         function greetingUser(user, greeting="Hello"){
            const greet = `${greeting}, ${user.firstName}`;
            const currentTime = `The current time is: ${Date()}`;
            return `${greet}, ${currentTime}!`;
         }
         console.log(greetingUser(user1)); //Hello, Lambros, The current time is: Thu Jun 11 2020 17:22:01 GMT+0300!
         console.log(greetingUser(user1)); //Hello, Lambros, The current time is: Thu Jun 11 2020 17:22:40 GMT+0300!
 
        }//end block
        // Contrary to what happens to the first function, the second one returns a different result each time we call it
        // Since the second function return a diff value each time we invoke it we it is impure
        // This function is unpredictable and to know what value will return after invocation we need to know both the argument(s) we pass AND the time of invocation.

        //? This is one of the major disadvantages of impure functions. 
        //. The advantage of pure functions, on the other hand, is that their outcome is determined solely by their inputs. The return value it generates for a given input never changes.

        //? The fact that pure functions are predictable means they are easy to test.
        //. A very simple test example...
       

