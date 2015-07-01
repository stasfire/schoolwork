/*
 * Virtual Pet App - Template
 *
 */
'use strict';

// Create the pet protoptype 
var pet = {
    // Fill in the properties.  
};
pet.feed = function () {
    // Fill in the function body. 
    // Set the object's hungry property to false.
    // Return a string of the form:
    // 'pet name is full.' 
};
pet.newDay = function () {
    // Fill in the function body.
    // Set ALL the boolean properties of the object to true.
    // Make sure you don't set non-boolean properties such as name or methods to true.
    // Return 'Good morning!'
};
pet.check = function () {
    // Fill in the function body.
    // Make sure you check ALL the boolean properties.
    // Return a string of the form (for all the true properties):
    // pet name is property1. pet name is property2. etc...
    // If all the Boolean properties are False, return a string of the form:
    // pet name is fine.
};
// Create the fish prototype.  fish inherits from pet. 
var fish =
fish.clean = function () {
    // Fill in the function body.
    // Set the object's ill property to false.
    // Return a string of the form: 'pet name likes the clean tank.'
};

// Create the dog prototype. dog inherits from pet.
var dog =

// Initialize the lonely property
dog.lonely =
dog.walk = function () {
    // Fill in the function body.
    // Set the object's ill property to false.
    // Return a string of the form: 'pet name enjoyed the walk!'
};
dog.play = function () {
    // Fill in the function body.
    // Set the object's lonely property to false.
    // return a string of the form: 'pet name loves you.'
};

/*
 * Virtual Pet App - Tests
   
   The expected console output for this test is:
    Fido is hungry.
    Fido is full.
    Fido is fine.
    Wanda is hungry.
    Wanda is full.
    Wanda is fine.
    Good morning!
    Good morning!
    Fido is hungry. Fido is lonely. Fido is ill.
    Fido is full.
    Fido is lonely. Fido is ill.
    Fido loves you.
    Fido is ill.
    Fido enjoyed the walk!
    Fido is fine.
    Wanda is hungry. Wanda is ill.
    Wanda is full.
    Wanda is ill.
    Wanda likes the clean tank.
    Wanda is fine.
    Fido is fine.
    Fido enjoyed the walk!
    Your Pet is hungry.
    Good morning!
    Your Pet is bored. Your Pet is hungry. Your Pet is ill. 
 *
 */
// Create a dog and a fish pet objects.
var myDog = Object.create(dog);
myDog.name = 'Fido';
var myFish = Object.create(fish);
myFish.name = 'Wanda';
console.log(myDog.check());      // Fido is hungry.
console.log(myDog.feed());       // Fido is full.
console.log(myDog.check());      // Fido is fine.
console.log(myFish.check());     // Wanda is hungry.
console.log(myFish.feed());      // Wanda is full.
console.log(myFish.check());     // Wanda is fine.
console.log(myDog.newDay());     // Good morning!
console.log(myFish.newDay());    // Good morning!
console.log(myDog.check());      // Fido is hungry. Fido is lonely. Fido is ill.
console.log(myDog.feed());       // Fido is full.
console.log(myDog.check());      // Fido is lonely. Fido is ill.
console.log(myDog.play());       // Fido loves you.
console.log(myDog.check());      // Fido is ill.
console.log(myDog.walk());       // Fido enjoyed the walk!
console.log(myDog.check());      // Fido is fine.
console.log(myFish.check());     // Wanda is hungry. Wanda is ill.
console.log(myFish.feed());      // Wanda is full.
console.log(myFish.check());     // Wanda is ill.
console.log(myFish.clean());     // Wanda likes the clean tank.
console.log(myFish.check());     // Wanda is fine.
console.log(myDog.check());      // Fido is fine.
console.log(myDog.walk());       // Fido enjoyed the walk!
// Create a fish with no name
var myNewFish = Object.create(fish); 
console.log(myNewFish.check());  // Your Pet is hungry.
// Create a new boolean property for myNewFish
myNewFish.bored = false; 
console.log(myNewFish.newDay()); // Good morning!
console.log(myNewFish.check());  // Your Pet is bored. Your Pet is hungry. Your Pet is ill.