// I worked [by myself, with:] on this challenge

// Your mission description:
// Escape from the dungeon
// The dragon has captured you and keeps you in his cave! In order to escape
// you licked magic mushroom and became invisible.
// There are two exits (0 or 1) from the cave, you have to choose
// one of them. The dragon doesn't see you, but will still
// try to get you by blasting fire into one of the exits.
// Better be lucky! Say "abrakadabra" and then, go and pick your exit. And the run!

// Pseudocode
// Create a fighter class with figthers who have a name and life points
// Give fighters speech
// Give fighters the ability to choose an exit
// Create one fighter and give him the name "thor"
// Give him a life, ie 10 life points
// Create a dragon, give him the name "dragon", and make him 1000 years old
// Let the dragon randomly choose an exit to blast his fire
// IF fighter and dragon choose the same exit, the figther dies (ie puts his live points to zero)
// ELSE the fighter survives
// Congratulate him in either case

// Initial Code
var fighter_exit = ""
var dragon_exit = ""

function fighter(name, number){
	this.name = name;
	this.life = number;
	this.speak = function(words){
		console.log(words)
	};
	this.chooseExit = function(exit_number){
		fighter_exit = exit_number; console.log("you have chosen exit " + exit_number)
	}
}
var thor = new fighter("thor", 10);

var dragon = {name: "dragon",
			age: 1000};
dragon.chooseExit = function(){
	dragon_exit = Math.round(Math.random()); console.log("the dragon has chosen exit " + dragon_exit)
};

if (fighter_exit === dragon_exit){thor.life -= 10; console.log("Congratulations, you die!")} 
else {console.log("Congratulations, you survived!")}

thor.speak("abrakadabra");
thor.chooseExit(1);
dragon.chooseExit();
thor.life

// Refactored Code

var fighter_exit = ""
var dragon_exit = ""

function fighter(name, number){
	this.name = name;
	this.life = number;
	this.speak = function(words){
		console.log(words)
	};
	this.chooseExit = function(exit_number){
		fighter_exit = exit_number; console.log("you have chosen exit " + exit_number)
	}
}
var thor = new fighter("thor", 10);

var dragon = {name: "dragon",
			age: 1000};
dragon.chooseExit = function(){
	dragon_exit = Math.round(Math.random()); console.log("the dragon has chosen exit " + dragon_exit)
};

thor.speak("abrakadabra");
thor.chooseExit(1);
dragon.chooseExit();

if (fighter_exit === dragon_exit){thor.life -= 10; console.log("Congratulations, you die!")} 
else {console.log("Congratulations, you survived!")}
	
thor.life

// Reflection
// Uff...cool exercise, but i got stuck and it took me long to figure out what was wrong:
// I ran into two issues: 
// One, that I could not call the variables "fighter_exit" and dragon_exit
// from outside of the functions/objects. So I researched and got to read about local/global var
// Thus, placed them on top of the code.
// Two,
// It just wouldn't work! The code ran through, but either way the fighter would always survive.
// I tried a lot of hypothesis on what's wrong, ie maybe the number still has digits even when rounded?
// But then finally finally found the most obvious: The code was in the wrong sequence: the if else was before
// I had defined the moves. Autch. Learning: When debugging, start with the most obvious first!!!