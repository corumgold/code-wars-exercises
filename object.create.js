// Greetings, warrior! In this kata you will learn, how Object.create method does its job.

// First over, what does it do? The signature of Object.create is like this:

// //throws TypeError
// //returns newly created object
// Object.create(prototype, [properties])

// Object.create serves to create new object that inherits given prototype and has properties being defined by "properties" parameter set on it.
// Parameters values must meet following requirements:

// prototype parameter should be some object1 (i.e. a non-primitive value) or null (but not undefined!). 
// If bad value passed for prototype, error TypeError must be thrown.

// properties parameter can be of any type or omitted at all.

// As a result of execution, Object.create will return a newly created object with inner property [[Prototype]]2 set to value of prototype parameter. 
// If properties parameter is passed and is not undefined, then Object.create will make call Object.defineProperties(obj,properties), 
// where obj is the object to be returned by Object.create.

// OBJECTIVES
// In absence of the original Object.create create your own implementation of it that acts like the original one and assign it to the Object.create. 
// To access inner [[Prototype]] property of object use its __proto__ property2.

// Your implementation will be used like this:

// var citizen = {
//   sleep: function(){ return "zzZ..."; },
//   panic: function(){ return "AaAaAaAa!"; }
// };

// var veteran = Object.create(citizen,{
//         panic: {
//           value: function(){
//             return "SNAFU";
//           }
//         }
//       });

Object.create = function(prototype, properties) {
    //Your code goes here
    //And remember: you need not to reinvent Object.defineProperties on your own!
  };