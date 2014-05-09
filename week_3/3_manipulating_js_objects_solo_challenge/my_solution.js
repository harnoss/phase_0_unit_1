// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
=> SET variable adam to an empty object

2. Give adam a name property with the value "Adam".
=> SET name property of var adam to "Adam"

3. Add a spouse property to terah and assign it the value of adam.
=> SET spouse property of var terah to value of adam

4. Change the value of the terah weight property to 125.
=> SET weight property of var terah to 125

5. Remove the eyeColor property from terah.
=> DELETE eyeColor propoerty from var terah

6. Add a spouse property to adam and assign it the value of terah.
=> SET spouse property of var adam to value of terah

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties
=> SET children property of terah to empty object

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".
=> SET new property "Carson" to object with property name of "Carson" and ADD to children property of var terah

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".
=> SET new property "Carter" to object with property name of "Carter" and ADD to children property of var terah

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".
=> SET new property "Colton" to object with property name of "Colton" and ADD to children property of var terah

11. Add a children property to adam and assign it the value of terah children.
=> SET children property of var adam to children property of terah

*/

// __________________________________________
// Write your code below.
var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}

var adam = {};
adam.name = "Adam";
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
terah.children = {};
terah.children.carson = {name: "Carson"};
terah.children.carter = {name: "Carter"};
terah.children.colton = {name: "Colton"};
adam.children = terah.children;






// __________________________________________
// Reflection: Use the reflection guidelines
// I started with the constructor notation (var adam = new Object()), but then realized that I had to switch
// to literal notation. What really helped me was to create a small diagram on a piece
// of paper to draw a "tree"-like structure of the two objects. Definately a very good
// learning! Apart from that, it seemed all manageable and fun to do. I am not sure if
// my pseudo code is good (I feel it's not) and will now look for how to write pseudo code
// specifically for js objects.


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)