// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
  // var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// First, define characters that the password can contain:
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+";

// Declare variables for each of the DOM elements we’ll be working with:
const passwordText = document.getElementById("password");
const length = document.getElementById("length");
const inclLower = document.getElementById("lower");
const inclUpper = document.getElementById("upper");
const inclNumbers = document.getElementById("numbers");
const inclSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");

// //When the “Generate Password” is clicked we’ll create a string with the allowed characters based on length specified and the options selected. This data is then passed to the generatePassword function:
// generateBtn.addEventListener("click", () => {
//   let characters = lower;
// inclNumbers.checked ? (characters += numbers) : "";
// inclSymbols.checked ? (characters += symbols) : "";
// passwordText.value = generatePassword(length.value, characters);
// });

generateBtn.addEventListener("click",) () => {
  var lowerQ = prompt("Include lowercase letters?");
  var upperQ = prompt("Include uppercase letters?");
  var numbersQ = prompt("Include numbers?");
  var symbolsQ = prompt("Include symbols?");
    let characters = ();
  passwordText.value = generatePassword(length.value, characters);
};

// And here is the generatePassword function that creates the password:
const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

// // Finally the functionality for copy to clipboard button:
// const copyBtn = document.getElementById("copy");
// copyBtn.addEventListener("click", () => {
//   passwordTxt.select();
//   document.execCommand("copy");
//   alert("Password Copied");
// });

// //Create functions
// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol() {
//   const symbol = "!@#$%^&*()-_=+";
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

// const generateBtn = (length, characters) => {
//   let password = "";
//   for (let i = 0; i < length; i++) {
//     password += characters.charAt(
//       Math.floor(Math.random() * characters.length)
//     );
//   }
//   return password;
// };

// document.getElementById("generate").addEventListener("click", function(){

//   document.getElementById("password")