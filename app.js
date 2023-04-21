"use strict"; //will help you to follow strict javascript rules.

// ///First dynamic input
// alert("Welcome to my page!");

// // first message
// function getAnime() {
//   const favoriteAnime = prompt("What is your favorite anime?");
//   return favoriteAnime;
// }

// //greetUser
// function helloUser() {
//   document.write(theirAnime + "" + "is my favorite anime too!");
// }

// //special message
// function userMessage(userAnime) {
//   if (userAnime == "") {
//     userAnime = prompt("Go watch some anime now!");
//   }

//   if (userAnime == "pokemon") {
//       document.write("Pikachu is my favorite character");
//     } else if (userAnime == "naruto") {
//       document.write("That's a classic");
//     } else {
//       document.write("Welcome to my page!");
//     }

// //last homework

// function reviewPage() {
//   let review = prompt("Can you review my page? Please rate it from 1 (worst) to 5 (best)");
//   console.log(review);
//   for (let i = 0; i < review, i++) {
//     document.write("<img class = 'loop-img' src= 'media.japanesewithanime.com/uploads/star-eyes-sailor-moon-ep01.jpg' alt= 'anime' />")
//   }
// }
//////// uphere

// let theirAnime = getAnime();

///second dynamic input
// const favoriteAnime = prompt("What is your favorite anime?");
// console.log(favoriteAnime);
// document.write(favoriteAnime + " " + "is my favorite anime too!");
// console.log(theirAnime);

// greetUser();

// document.write(theirAnime + " " + "is my favorite anime too!");

// if (favoriteAnime == "pokemon") {
//   alert("Pikachu is my favorite character");
// } else if (favoriteAnime == "Gundam") {
//   alert("That's a classic");
// } else {
//   alert("I should rewatch that show");
// }

///third dynamic inpit

// let result = confirm("Are you sure you continue to the page?");

// if (result) {
//   // User clicked "OK"
//   console.log("Welcome");
// } else {
//   // User clicked "Cancel"
//   console.log("Bye");

// if (favoriteAnime == "pokemon") {
//   alert("Pikachu is my favorite character");
// } else if (favoriteAnime == "Gundam") {
//   alert("That's a classic");
// } else {
//   alert("I should rewatch that show");
// }

///third dynamic inpit
// let result = confirm("Are you sure you continue to the page?");

// if (result) {
//   // User clicked "OK"
//   console.log("Welcome");
// } else {
//   // User clicked "Cancel"
//   console.log("Bye");

///First dynamic input
alert("Welcome to my page!");

function getAnime() {
  let userAnime = prompt("What's your favorite anime?");
  return userAnime;
}

function helloPage() {
  document.write(theirAame + " is my favorite show too!");
}

// function askingQuestion(userAnime) {
//   if (userAnime == "") {
//     usersName = prompt("Go watch some shows!");
//   }

//   if (userAnime == "naruto") {
//     document.write("That's a classic");
//   } else if (userAnime == "bleach") {
//     document.write("Love that show");
//   } else if (userAnime == "Attack on Titans") {
//     document.write("Nice");
//   } else {
//     document.write("Welcome again! Explore my page");
//   }
// }

///second dynamic input
// const favoriteAnime = prompt("What is your favorite anime?");
// console.log(favoriteAnime);
// document.write(favoriteAnime + " " + "is my favorite anime too!");

// if (favoriteAnime == "pokemon") {
//   alert("Pikachu is my favorite character");
// } else if (favoriteAnime == "Gundam") {
//   alert("That's a classic");
// } else {
//   alert(" Welcome again to my page! Hope you like anime");
// }

///third dynamic inpit
let result = confirm("Are you sure you want to continue to the page?");

// if (result) {
//   // User clicked "OK"
//   console.log("Welcome");
// } else {
//   // User clicked "Cancel"
//   console.log("Bye");
// }

///// homework loop

function askingQuestion(userAnime) {
  while (userAnime == "") {
    usersName = prompt("Go watch some shows!");
  }

  if (userAnime == "naruto") {
    document.write("That's a classic");
  } else if (userAnime == "bleach") {
    document.write("Love that show");
  } else if (userAnime == "Attack on Titans") {
    document.write("Nice");
  } else {
    document.write("Welcome again! Explore my page");
  }
}

///part 2

function dragonBall() {
  let review = prompt("How many dots you think are in Krillin's forehead?");

  console.log(review);

  for (let i = 0; i < review; i++) {
    document.write(
      "<img class='star-img' src='https://em-content.zobj.net/source/microsoft-teams/337/star_2b50.png' alt='star picture' />"
    );
  }
}
