// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. William Pangestu
//  2. Justin Harnoss

// 1. "YOU SIGNED... WHO?!"
var client1 = {
  name: "Schwarzennegger",
  age: 72,
  quote: "I will be back!",
};
  
// 2. "Here they Come!"

var client2 ={
  name: "Adam Sandler",
  age: 47,
  quote: "That's your home! Are you too good for your home?!",
};

var client3 = {
  name: "Kristen Bell",
  age: 33,
  quote: "Do you wanna build a snowman?",
};

var client4 = {
  name: "Jim Carrey",
  age: 52,
  quote: "...So you're telling me there's a chance? YEAH!",
};

var clients = [client1, client2, client3, client4];


// 3. "TIME IS MONEY!"
function Client (name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote =quote;
};

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


// 4. "SHOW 'EM OFF!"

Client.prototype.display = function () {
    console.log ("this person's name is " + this.name + " his/her age is " + this.age + " and his/her quote is " + this.quote) 
  }

client1.showQuote = function() {
  console.log (client1["quote"])
}

client1.showQuote = function() {
  console.log (this.quote)
}

client1.showQuote()

// ** BONUS **
// Diplaying all the client's properties in the Clients Array
for (i = 0; i < clients.length; i++){
  for(var x in clients[i]) {console.log(clients[i][x])}
}

// Push shooterMcGavin to Clients array 

Clients.push(shooterMcGavin);

// Automatically adds new Client to the Clients array, when prompt answered with "yes"

function Client (name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote =quote;
  var New_Client = [this.name, this.age, this.quote];
  this.add = prompt("yes or no");
  if (this.add === "yes"){clients.push(New_Client)}
};


//  Your Reflection:
//Wonderful ps with William. Great learning here, especially in the bonus part, where
//we tried to create some more fancy functions and loops through experimentation.
//I also learned how important reading error messages is: Error messages are presents (not enemies)
//because they give you hints on what to do.
//In addition, i learned that i can improve my communication by being much clearer on 
//what I mean and by asking more questions for clarification. We sometimes had trouble
//to align, because (as we realized later) our assignment descriptions were different (jei!)
//Finally, I learned that attention to detail really matters when it comes to JS.
//Creating strings without quotation marks will return an undefined variable, simple stuff
//that I tend to do wrong. I will try to practice that by doing more hand-work and actual
//coding, practice practice practice!