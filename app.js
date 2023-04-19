"use scrict";

///First dynamic input
alert("Welcome to my page!");

///second dynamic input
const favoriteAnime = prompt("What is your favorite anime?");
console.log(favoriteAnime);
document.write(favoriteAnime + " " + "is my favorite anime too!");

if (favoriteAnime == "pokemon") {
  alert("Pikachu is my favorite character");
} else if (favoriteAnime == "Gundam") {
  alert("That's a classic");
} else {
  alert("I should rewatch that show");
}

///third dynamic inpit
let result = confirm("Are you sure you continue to the page?");

if (result) {
  // User clicked "OK"
  console.log("Welcome");
} else {
  // User clicked "Cancel"
  console.log("Bye");
}
