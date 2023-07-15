/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
var Person_name = "Hamza Tariq";
console.log("Hello", Person_name, ", would you like to learn some Python today?");

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
var personName = "John Doe";

var lowercaseName = personName.toLowerCase();
var uppercaseName = personName.toUpperCase();
var titlecaseName = personName.replace(/\b\w/g, c => c.toUpperCase());

console.log(`Lowercase name: ${lowercaseName}`);
console.log(`Uppercase name: ${uppercaseName}`);
console.log(`Titlecase name: ${titlecaseName}`);


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Fawad once said, “A person who never made a mistake never tried anything new.”
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
var quote = "The only way to do great work is to love what you do.";
var author = "Steve Jobs";
console.log( `${author} once said, "${quote}"`);

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

var famous_person = "Fawad";
var message = `${famous_person} once said, "I have no special talent. I am only passionately curious."`;
console.log(message);

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// task 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

var nameWithWhitespace = "\t   \n  John Doe  \t \n";
console.log(`Name with whitespace: "${nameWithWhitespace}"`);
var strippedName = nameWithWhitespace.trim();
console.log(`Stripped name: "${strippedName}"`);

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 7 
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

console.log(5 + 3); // Addition: 5 + 3 = 8
console.log(10 - 2); // Subtraction: 10 - 2 = 8
console.log(4 * 2); // Multiplication: 4 * 2 = 8
console.log(16 / 2); // Division: 16 / 2 = 8

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 8
// You should create four lines that look like this:

// console.log(5 + 3)

// Your output should simply be four lines with the number 8 appearing once on each line.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

console.log(5 + 3); // Addition: 5 + 3 = 8
console.log(10 - 2); // Subtraction: 10 - 2 = 8
console.log(4 * 2); // Multiplication: 4 * 2 = 8
console.log(16 / 2); // Division: 16 / 2 = 8

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// task 9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

var favoriteNumber = 3;
var message = `My favorite number is ${favoriteNumber}.`;
console.log(message);


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// task 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////// 


// Program written by [Hamza Tariq]
// Date: [7/10/2023]

// Store a person’s name in a variable
var personName = "Hamza Tariq";

// Compose a personalized message using the person's name
var message = `My Name is ${personName}, i'm a PHP full skack devoloper.`;

// Print the personalized message
console.log(message);


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
var names = ["Ali", "Babar", "Charlie", "David"];

for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
var names = ["Ali", "Babar", "Charlie", "David"];
var message = "Hello, would you like to hang out sometime, ";

for (var i = 0; i < names.length; i++) {
  console.log(message + names[i] + "?");
}

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
var transportationModes= ["Honda motorcycle", "Toyota car", "BMW motorcycle", "Ford truck"];

for (var i = 0; i < transportationModes.length; i++) {
  console.log(`I would like to own a ${transportationModes[i]}.`);
}

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
var guestList = ["Fawad", "Babar Ali", "Jabbar"];

for (var i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are cordially invited to dinner at my place. Please var me know if you can attend.`);
}

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
var guestList = ["Fawad", "Babar Ali", "Jabbar"];
var unavailableGuest = "Fawad";
var newGuest = "Ali Babar";

// Find the index of the unavailable guest
var indexOfUnavailableGuest: number = guestList.indexOf(unavailableGuest);

// Replace the unavailable guest with the new guest
guestList[indexOfUnavailableGuest] = newGuest;

// Send out new invitations
for (var i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are cordially invited to dinner at my place. Please var me know if you can attend.`);
}

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
var guestList: string[] = ["Fawad", "Babar Ali", "Jabbar"];
var unavailableGuest: string = "Fawad";
var newGuest: string = "Ali Babar";

// Find the index of the unavailable guest
var indexOfUnavailableGuest: number = guestList.indexOf(unavailableGuest);

// Print the name of the guest who can't make it
console.log(`Unfortunately, ${unavailableGuest} can't make it to dinner.`);

// Replace the unavailable guest with the new guest
guestList[indexOfUnavailableGuest] = newGuest;

// Send out new invitations
for (var i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are cordially invited to dinner at my place. Please var me know if you can attend.`);
}

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person varting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, varting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

var guestList: string[] = ["Ali Babar", "Babar Ali", "Jabbar"];
var maxGuests: number = 2;

// Print a message indicating that only two people can be invited
console.log("Apologies, due to limited space, we can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guestList.length > maxGuests) {
  var removedGuest: string = guestList.pop()!;
  console.log(`Sorry, ${removedGuest}, we won't be able to invite you to dinner.`);
}

// Print invitations to the remaining two people
for (var i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are still invited to dinner at my place.`);
}

// Clear the guest list
guestList = [];

// Print the empty guest list
console.log("Guest list: ", guestList);
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

var locations: string[] = ["Tokyo", "Paris", "Sydney", "Rome", "New York"];

// Print the array in its original order
console.log("Original Order:", locations);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", [...locations].sort());

// Show that the array is still in its original order
console.log("Still in Original Order:", locations);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order:", [...locations].sort().reverse());

// Show that the array is still in its original order
console.log("Still in Original Order:", locations);

// Reverse the order of the list
locations.reverse();

// Print the array to show the changed order
console.log("Reversed Order:", locations);

// Reverse the order of the list again
locations.reverse();

// Print the array to show it's back to its original order
console.log("Original Order:", locations);

// Sort the array in alphabetical order
locations.sort();

// Print the array to show the changed order
console.log("Alphabetical Order:", locations);

// Sort the array in reverse alphabetical order
locations.sort((a, b) => b.localeCompare(a));

// Print the array to show the changed order
console.log("Reverse Alphabetical Order:", locations);

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
var guestList: string[] =  ["Ali Babar", "Babar Ali", "Jabbar"];

// Print the number of people invited to dinner
console.log(`Number of people invited to dinner: ${guestList.length}`);



/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 20
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

var landmarks: string[] = ["Eiffel Tower", "Great Wall of China", "Machu Picchu", "Taj Mahal", "Pyramids of Giza"];

console.log(landmarks);


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

var person: {
    name: string;
    age: number;
    occupation: string;
  } = {
    name: "Hamza Tariq",
    age: 26,
    occupation: "Software Engineer",
  };
  
  console.log(person);
  

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
var colors: string[] = ["red", "green", "blue"];

// Intentional index error
console.log(colors[3]);

// Corrected index error
console.log(colors[2]);



/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// var car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
var car: string = 'subaru';

// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// Test 2
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

// Test 3
console.log("Is car != 'ford'? I predict True.");
console.log(car != 'ford');

// Test 4
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');

// Test 5
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

// Test 6
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

// Test 7
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

// Test 8
console.log("Is car !== 'honda'? I predict True.");
console.log(car !== 'honda');

// Test 9
console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5);

// Test 10
console.log("Is car.length <= 7? I predict True.");
console.log(car.length <= 7);

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Equality and inequality with strings
var nname: string = 'John';
console.log("Is name equal to 'John'? I predict True.");
console.log(nname == 'John');

var country: string = 'USA';
console.log("Is country not equal to 'Canada'? I predict True.");
console.log(country != 'Canada');

// Tests using the lowercase function
var text: string = 'Hello World';
console.log("Is the lowercase of 'Hello World' equal to 'hello world'? I predict True.");
console.log(text.toLowerCase() == 'hello world');

// Numerical tests
var age: number = 25;
console.log("Is age greater than 18? I predict True.");
console.log(age > 18);

var quantity: number = 10;
console.log("Is quantity less than or equal to 5? I predict False.");
console.log(quantity <= 5);

// Tests using "and" and "or" operators
var isAdmin: boolean = true;
var isLoggedIn: boolean = true;
console.log("Is the user logged in and an admin? I predict True.");
console.log(isLoggedIn && isAdmin);

var hasAccess: boolean = true;
var isPremium: boolean = false;
console.log("Does the user have access or is a premium member? I predict True.");
console.log(hasAccess || isPremium);

// Test whether an item is in an array
var fruits: string[] = ['apple', 'banana', 'orange'];
var selectedFruit: string = 'banana';
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.indexOf(selectedFruit) !== -1);

// Test whether an item is not in an array
var animals: string[] = ['lion', 'tiger', 'bear'];
var selectedAnimal: string = 'elephant';
console.log("Is 'elephant' not in the animals array? I predict True.");

console.log(animals.indexOf(selectedAnimal) === -1);


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
var alien_color: string = 'green';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points!");
}

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var alien_color: string = 'red';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points!");
}

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
var alien_color: string = 'green';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting the alien!");
} else {
  console.log("Congratulations! You just earned 10 points for shooting the alien!");
}
// • Write one version of this program that runs the if block and another that runs the else block.
var alien_color: string = 'red';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting the alien!");
} else {
  console.log("Congratulations! You just earned 10 points for shooting the alien!");
}

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
var alien_color: string = 'green';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points!");
} else if (alien_color === 'yellow') {
  console.log("Congratulations! You just earned 10 points!");
} else if (alien_color === 'red') {
  console.log("Congratulations! You just earned 15 points!");
}
// ////////////////////
var alien_color: string = 'yellow';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points!");
} else if (alien_color === 'yellow') {
  console.log("Congratulations! You just earned 10 points!");
} else if (alien_color === 'red') {
  console.log("Congratulations! You just earned 15 points!");
}

// ////////////////////
var alien_color: string = 'red';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points!");
} else if (alien_color === 'yellow') {
  console.log("Congratulations! You just earned 10 points!");
} else if (alien_color === 'red') {
  console.log("Congratulations! You just earned 15 points!");
}



/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 21
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

var age: number = 25;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 29
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
var favorite_fruits: string[] = ["banana", "mango", "strawberry"];

if (favorite_fruits.indexOf("banana") !== -1) {
  console.log("You really like bananas!");
}

if (favorite_fruits.indexOf("mango") !== -1) {
  console.log("You really like mangoes!");
}

if (favorite_fruits.indexOf("strawberry") !== -1) {
  console.log("You really like strawberries!");
}

if (favorite_fruits.indexOf("apple") !== -1) {
  console.log("You really like apples!");
}

if (favorite_fruits.indexOf("kiwi") !== -1) {
  console.log("You really like kiwis!");
}


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

var usernames: string[] = ["admin", "Eric", "John", "Jane", "Alice"];

for (var username of usernames) {
  if (username === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

var usernames: string[] = ["admin", "Eric", "John", "Jane", "Alice"];

if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  for (var username of usernames) {
    if (username === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}

// Remove all usernames from the array
usernames = [];

if (usernames.length === 0) {
  console.log("We need to find some users!");
}

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

var current_users: string[] = ["John", "Emma", "David", "Sophia", "Alex"];
var new_users: string[] = ["Emma", "Olivia", "Daniel", "sophia", "Michael"];

for (var new_user of new_users) {
  var is_username_taken: boolean = current_users.some((current_user) => current_user.toLowerCase() === new_user.toLowerCase());

  if (is_username_taken) {
    console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
  } else {
    console.log(`Congratulations! The username '${new_user}' is available.`);
  }
}


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
var numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (var number of numbers) {
  var ordinalEnding: string;

  if (number === 1) {
    ordinalEnding = "st";
  } else if (number === 2) {
    ordinalEnding = "nd";
  } else if (number === 3) {
    ordinalEnding = "rd";
  } else {
    ordinalEnding = "th";
  }

  console.log(`${number}${ordinalEnding}`);
}



/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
var favoritePizzas: string[] = ["Pepperoni", "Margherita", "Hawaiian"];

for (var pizza of favoritePizzas) {
  console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");



/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

var animals: string[] = ['dog', 'cat', 'rabbit'];

for (var animal of animals) {
  console.log(animal);
}

console.log('');

for (var animal of animals) {
  console.log(`A ${animal} would make a great pet.`);
}

console.log('');
console.log('Any of these animals would make a great pet!');


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//  i'm change function name bcoz name function name make error
function make_shirts(size: string, message: string): void {
    console.log(`The shirt size is ${size} and it has the message "${message}" printed on it.`);
}
  // Calling the function
  make_shirts('Large', 'I love coding!');
  
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and it has the message "${message}" printed on it.`);
  }
  
  // Making a large shirt with the default message
  make_shirt();
  
  // Making a medium shirt with the default message
  make_shirt('Medium');
  
  // Making a custom-sized shirt with a different message
  make_shirt('Small', 'Hello, World!');
  


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 38
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

function describe_city(city: string, country: string = 'Pakistan'): void {
    console.log(`${city} is in ${country}.`);
  }
  
  // Calling the function for different cities
  describe_city('Karachi');
  describe_city('Lahore');
  describe_city('New York', 'United States');
  

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 39
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  // Calling the function with different city-country pairs
  console.log(city_country('Lahore', 'Pakistan'));
  console.log(city_country('Paris', 'France'));
  console.log(city_country('Sydney', 'Australia'));
  


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 40
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

function make_album(artist: string, title: string, tracks?: number): object {
    var album: any = {
      artist: artist,
      title: title,
    };
  
    if (tracks) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  // Creating album objects using the make_album() function
  var album1 = make_album('Artist 1', 'Album 1');
  var album2 = make_album('Artist 2', 'Album 2', 12);
  var album3 = make_album('Artist 3', 'Album 3', 8);
  
  // Printing the album objects
  console.log(album1);
  console.log(album2);
  console.log(album3);
  

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

function show_magicianss(names: string[]): void {
    for (var name of names) {
      console.log(name);
    }
  }
  
  // Creating an array of magician's names
  var magician_names: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jilvarte', 'Teller'];
  
  // Calling the show_magicians() function
  show_magicianss(magician_names);
  

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

function make_greats(names: string[]): void {
    for (var i = 0; i < names.length; i++) {
      names[i] = `the Great ${names[i]}`;
    }
  }
  
  // Creating an array of magician's names
  var magician_names: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jilvarte', 'Teller'];
  
  // Function to show the magicians
  function show_magiciansss(names: string[]): void {
    for (var name of names) {
      console.log(name);
    }
  }
  
  // Modifying the magician_names array using the make_great() function
  make_greats(magician_names);
  
  // Calling the show_magicians() function to see the modified list
  show_magiciansss(magician_names);
  


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
function make_great(names: string[]): string[] {
    var great_names: string[] = [];
    for (var name of names) {
      great_names.push(`the Great ${name}`);
    }
    return great_names;
  }
  
  // Creating an array of magician's names
  var magician_names: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jilvarte', 'Teller'];
  
  // Function to show the magicians
  function show_magicians(names: string[]): void {
    for (var name of names) {
      console.log(name);
    }
  }
  
  // Creating a separate array with the Great added to each magician's name
  var great_magician_names: string[] = make_great([...magician_names]);
  
  // Calling the show_magicians() function with both arrays
  console.log("Original Magicians:");
  show_magicians(magician_names);
  console.log("\nGreat Magicians:");
  show_magicians(great_magician_names);
  


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

function order_sandwich(...items: string[]): void {
    console.log("Order Summary:");
    console.log("Sandwich items: " + items.join(", "));
    console.log("Enjoy your sandwich!");
    console.log("------------------------------------");
  }
  
  // Calling the order_sandwich() function with different number of arguments
  order_sandwich("Ham", "Cheese", "vartuce", "Tomato");
  order_sandwich("Turkey", "Swiss");
  order_sandwich("Chicken", "Bacon", "Avocado", "Mayonnaise");
  



/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Task 45
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

function storeCarInfo(manufacturer: string, model: string, ...options: any[]): object {
    var carInfo: object = {
      manufacturer: manufacturer,
      model: model,
      options: options
    };
    return carInfo;
  }
  
  // Calling the storeCarInfo() function with required information and additional options
  var carr = storeCarInfo('Toyota', 'Corolla', 'Color: Red', 'Optional feature: Sunroof');
  
  // Printing the returned object to verify the stored information
  console.log(carr);
  




