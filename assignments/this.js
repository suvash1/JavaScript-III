/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. "this" is the pointer to the window/console object
* 2. "this" is the pointer to the function preceding the dot, where this is called
* 3. " this" is the pointer to the specific instance of the object created and returned by the constructor function
* 4. "this" is a pointer to a explicit context using 'call' and 'apply'
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function writeName(name){
    return this;
}

console.log(writeName('Ryan'))





// Principle 2

// Implicit binding:

// code example for Implicit Binding
'use strict'
const Person = {
    name:'Ryan',
    location:'New York',
    speak: function(country){
        return `Hi, I am ${this.name}. I am from ${country} `
    }
};

console.log(Person.speak("USA"));

// Principle 3

// code example for New Binding

function Person(name,location){
    this.name = name,
    this.location = location,
    this.speak = function(country){
        return  `My name is ${this.name}. I am from ${country}`
    };
}

const ryan = new Person('Ryan','NYC');
const sam = new Person('Sam','Boston');
console.log(ryan.speak('USA'));

console.log(ryan.speak.call('Denver'));

// Principle 4

// code example for Explicit Binding

function Person(name,location){
    this.name = name,
    this.location = location,
    this.speak = function(){
        return  `My name is ${this.name}. I am from ${this.location}`
    };
}

const ryan = new Person('Ryan','NYC');
const sam = new Person('Sam','Boston');
console.log(ryan.speak('USA'));

console.log(ryan.speak.call(sam));