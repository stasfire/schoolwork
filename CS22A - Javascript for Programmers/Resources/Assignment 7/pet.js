/*
 * Virtual Pet App with User Interface - Template
 *
 */
$(document).ready(function () {
    'use strict';
    // Here's the object oriented model implementation from a previous assignment
    // DO NOT MODIFY THIS PART
    // Create the pet protoptype
    var pet = {
        hungry: true,
        ill: false,
        name: 'Your Pet'
    };
    pet.feed = function () {
        // The pet is no longer hungry.
        // Return a string indicating that the pet is full. 
        this.hungry = false;
        return this.name + ' is full.';
    };
    pet.newDay = function () {
        // Set ALL the boolean properties to true.
        // Return 'Good morning!'
        for (var prop in this) {
            if (typeof this[prop] === 'boolean') {
                this[prop] = true;
            }
        }
        return 'Good morning!';
    };
    pet.check = function () {
        // Check ALL the boolean properties of the pet object.
        // Return true if the pet needs attention.
        // Return false is the pet is fine.
        var result = false;
        for (var prop in this) {
            if (this[prop] === true) {
                result = true;
            }
        }
        return result;
    };
    // Create the fish prototype. 
    var fish = Object.create(pet);
    fish.clean = function () {
        // Set the object unhealthy property to false.    
        // Return a string of the form: 'pet name likes the clean tank.'
        this.ill = false;
        return this.name + ' likes the clean tank.';
    };
    // Create the dog prototype. 
    var dog = Object.create(pet);
    // initialize the lonely property
    dog.lonely = false;
    dog.walk = function () {
        // Set the object's unhealthy property to false.
        // Return a string of the form: 'pet name enjoyed the walk!'
        this.ill = false;
        return this.name + ' enjoyed the walk!';
    };
    dog.play = function () {
        // Set the object's lonely property to false.
        // Return a string of the form:  'pet name loves you.'
        this.lonely = false;
        return this.name + ' loves you.';
    };
/*---------------------------------------------------------------------------------------------*/
    // Do not modify anything above this line
    // New code starts here
    
    // These are the User Interface functions - the 'view'
    function updateUI(species) {
        // Rearrange the images and the buttons to reflect the specific adoption
        // Enter your code here
    }
    
    function updatePetUI(petObject, petSpecies) {
        // Check to see if the pet needs attention
        // Update the UI accordingly to show that.
        // Enter your code here
    }
    
    function changeUIBackground() {
        // Initiate a background change - from day to night and vice-versa
        // Enter your code here
        }

    // This is the main function - it controls the app logic    
    function adopt(event) {
        var myPet;    // this is the adopted pet.
        var species = event.target.id; // the species of the adopted pet:  fish or dog?
        // Update the data model to reflect the adoption
        if (species === 'dog') {
            myPet = Object.create(dog);        
        } else if (species === 'fish') {
            myPet = Object.create(fish); 
        } else {  // enable future enhancements
            myPet = Object.create(pet);        
        }
        // disable further adoptions 
        $('#choice').off('click');
        // Enter the rest of your code here
        
        // Upate the UI
        
        // add an event listener for the action buttons.
                   
        // Schedule a background change - every 30 seconds

        // Schedule a new day start every 60 seconds
        
    }
    
    // main program starts here
    // Register the pet adoption event handler on the element with id choice

});