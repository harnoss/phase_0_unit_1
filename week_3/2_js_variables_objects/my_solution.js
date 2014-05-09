// I paired [by myself, with:] on this challenge.
// None

// Pseudocode
// 
// Create a function "assert" that takes three attributes: a test, a failure message, and a test-number
// IF test is true THEN
//    PRINT the test number + the word "true" to the screen 
//    RETURN true
// ELSE 
//    PRINT the test number + the word "false" to the screen
//    DISPLAY "ERROR" + the defined failure message
// ENDIF

// SET a new variable "secretNumber" equal to a number
// INIT function "assert"
// READ test: secretNumber is a number, message: "The value of secretNumber should be a number.", test-number: 1.

// SET var secretNumber equal to 7
// INIT function "assert"
// READ test: secretNumber is 7, message: "The value of secretNumber should be 7.", test-number: 2.

// SET a new variable "password" equal to a string
// INIT function "assert"
// READ test: password is a string, message: "The value of password should be a string.", test-number: 3.

// SET var password equal to "just open the door"
// INIT function "assert"
// READ test: password is "just open the door", message: "The value of password should be 'just open the door'", test-number: 4.

// SET a new variable "allowedIn" equal to a boolean
// INIT function "assert"
// READ test: allowedIn is a boolean, message: "The value of allowedIn should be a boolean.", test-number: 5.

// SET var allowedIn equal to a false
// INIT function "assert"
// READ test: allowedIn is false, message: "The value of allowedIn should be false.", test-number: 6.

// SET a new variable "members" equal to an array
// INIT function "assert"
// READ test: array is an array, message: "The value of members should be an array", test-number: 7.

// SET for array members position 0 = "John"
// INIT function "assert"
// READ test: position 0 of array members = John, message: "The first element in the value of members should be 'John'", test-number: 8.

// SET for array members position 3 = "Mary"
// INIT function "assert"
// READ test: position 3 of array members = Mary, message: "The fourth element in the value of members should be 'Mary'", test-number: 9.

// __________________________________________
// Write your code below.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}
var secretNumber = 1;

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

var secretNumber = 7;
assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)
var password = "123";
assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)
var password = "just open the door";
assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)
var allowedIn = true;
assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)
var allowedIn = false;
assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)
var members = []
assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

members[0] = "John"
assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)
members[3] = "Mary"
assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
// What i did:
// Set variables only once so that they don't need to be changed
// Set them in the beginning for readability
// What i did not do to keep having 9 tests (but depending on the circumstances could have done):
// Merge the tests from 9 to 4, by e.g. instead of testing for number AND number 7, only test for 7

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}
var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John","","","Mary"];

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)
assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)
assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)
assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)
assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)
assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)
assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)
assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)
assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)


// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// I wasn't sure how to actually write pseudo-code so I read the provided resources as well
// as a couple of examples on stackoverflow; reading and then directly applying it really
// helped to get my head around that
// I really enjoyed going through the code, getting a sense of what it is doing through
// pseudo coding it and then make it work; it's like solving a puzzle, that was fun!
// These were my first lines of pseudo-code and I feel that it could be much shorter and
// less verbouse, so I will dive into that as a next step and get more familiar with that
// So now I'm gonna go and check out the pseudo-code of my peers and learn from them! :)



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
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

