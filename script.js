// Same keys and values
/* ES2015 Version */
const createInstructor = (firstName, lastName) => ({firstName, lastName});


// Computed Property names
/* Write an ES2015 Version */

let favoriteNumber = 42;
let instructor = {
    firstName: 'Colt',
    [favoriteNumber]: "That is my favorite"
};

// Object Methods
/* Write an ES2015 Version */
let firstName = 'Colt';
const instructor = {
    firstName,
    sayHi(){
        return "Hi!"
    },
    sayBye(){
        return firstName + " says bye!";
    }
};

// createAnimal function
/* Write a function which generates an animal object. The function should accpet 3 arguments:
species (cat, dog),
verb (bark, bleet),
noise (woof, baa)
*/
const createAnimal = (species, verb, noise) => {
    let animal = {
        'species' : species,
        [verb](){
            return noise;
        }
    }
    return animal;
};

