// I worked on this challenge [by myself, with:]
 by mself
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 

//--1--Rescue Mission

//Pseudocode
//move left
//move right
//move up
//move right
//move right
//move down
//attack

// This is your code controlling Tharin!
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();
 
 
//--2--Grab the mushroom

//Pseudocode
//move up
//move right
//move left
//move up
//attack

// This is your code controlling Tharin!

this.moveUp();
this.moveRight(Tharin);
this.moveLeft(Tharin);
this.moveUp();

this.attackNearbyEnemy();

//--3--Drink me

//move right
//attack
//move down
//move up
//move right
//attack

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.attackNearbyEnemy();
 
 
//--4--Taunt the guards

//Pseudocode
//move right
//move right
// move up
//move right
//say kamikaze
//move down
//move right
//move up
//move right

 // Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("kamikaze");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();
 
 

//--5--It's a trap
//Pseudocode
//move down
//move down
//say hey 
//move uo
// move up

this.moveDown();
this.moveDown();
this.say("Hey there!");
this.moveUp();
this.moveUp();

//--6--Taunt
//Pseudocode

this.say("Do you speak German?");
this.say("Yes i mean you, you little ugly monster");
this.say("Whats your problem, why dont u answer?");


//--7--Cowardly Taunt
//Pseudocode

// Run your soldier out where the ogres can hear you.
this.moveXY(50, 16);
// Say something!
this.say("HEY!");
// Then run back behind the arrow towers for safety.
this.moveXY(70, 10);


//--8--Commanding followers
//Pseudocode
// say follow
// move down
// say attack
//move up

// Saying anything with "follow" in it will get nearby soldiers
// to follow you
this.say("Follow me!");
// Saying anything with "attack" will send nearby troops into
// a battle mode.
this.moveXY(58, 46);
this.say("attack now");
// Make sure Tharin is safe!
this.moveXY(75, 63);

//--9--Mobile Artillery
//Pseudocode
// move up
// attack 4x

this.moveXY(47, 40);
this.attackXY(49, 63);
this.attackXY(49, 58);
this.attackXY(67, 52);
this.attackXY(61, 46);


// Questions
//What is this referring to? Think programming-wise rather than in the terms of the game.
//refers to an object, the "owner" of the method
//What does the () do in JavaScript?
//takes commands/properties
//What is the point of the semicolons?
//say that a piece of code has ended

// Reflection:
// Write your reflection here.
//it was hard to measure the distances in the beginning, so I did trial and error. Also, i wasn't sure if 
//it is "this.moveUp()" "Tharin.moveUp()", but found out that given the method "moveUP" apparently has only
//Tharin as its reference object, just "this" is fine
//looked up definitions for "this" to make sure i got the concept http://www.quirksmode.org/js/this.html
//given that I did the codeacademy js tutorials previously, it was not too much of a strech through
//to get my head around it