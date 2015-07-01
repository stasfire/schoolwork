/*
 * Virtual Pet App with User Interface - Solution
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
    
    // These are the User Interface functions - View
    function updateUI(species) {
 
        // Rearrange the images and the buttons to reflect the specific adoption
        $('#adopt').text('');  // Clear the text of the header
        $('#feed').show();
        if (species === 'dog') {
            $('#fish').hide();
            $('#walk').show();
            $('#play').show();   
        } else if (species === 'fish') {    
            $('#dog').hide();
            $('#clean').show(); 
        }
    }
    
    function updatePetUI(petObject, petSpecies) {
        // Check to see if the pet needs attention
        // Update the UI accordingly to show that.
        var imageSelector = '#' + petSpecies;
        if (petObject.check()) {
            // pet needs attention
            $(imageSelector).addClass('move');
        } else {
            $(imageSelector).removeClass('move');  
        }
    }
    
    function changeUIBackground() {
        // Initiate a background change - from day to night and vice-versa
        $('body').toggleClass('day night');
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
        
        // Upate the UI
        updateUI(species);
        updatePetUI(myPet, species)
        
        // add an event listener for the action buttons.
        $('#action').click(function(event) {            
            // process the action initiated by the corresponding button
            // the event target here is one of the action buttons.
            if (event.target.id === 'feed') {
                myPet.feed();
            } else if (event.target.id === 'play') {
                myPet.play();
            } else if (event.target.id === 'walk') {
                myPet.walk();
            } else if (event.target.id === 'clean') {
                myPet.clean();
            };
            updatePetUI(myPet, species)  // Update the pet image if needed
        }); 
                   
        // Schedule a background change - every 30 seconds
        setInterval(changeUIBackground, 30000);
        
        // Invoke newDay every 60 seconds 
        setInterval(function() {
            myPet.newDay();
            //update the pet image if needed
            updatePetUI(myPet, species)
        }            
                , 60000); 
    }
    
    // main program starts here
    // Register pet adoption event handler
    $('#choice').click(adopt);
});