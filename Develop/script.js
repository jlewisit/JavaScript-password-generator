var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var symbols = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+"];
// Object containing all potential characters
const characters = {
  lower: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  upper: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  numbers: ["0","1","2","3","4","5","6","7","8","9"],
  symbols: ["!","@","#","$","%","^","&","*","(",")","-","_","=","+"],
}
var inclLower = document.getElementById("inclLower");
var inclUpper = document.getElementById("inclUpper");
var inclNumbers = document.getElementById("inclNumbers");
var inclSymbols = document.getElementById("inclSymbols");
var passwordLength = document.getElementById("passwordLength");
var password = "";
var lowerPrompt = "";
var upperPrompt = "";
var numbersPrompt = "";
var symbolsPrompt = "";
// var generateBtn = document.querySelector("#generate");
// var passwordText = document.getElementById("password");

// (**Starter Code**) Add event listener to generate button
// generateBtn.addEventListener("click", writePassword); - ** IS THIS NEEDED???
document.getElementById("generate").addEventListener("click", paramPrompts);

  function paramPrompts() {
    passwordLength = Number(prompt("Enter a password length between 4 and 128"));
    console.log(passwordLength);
    // If user presses cancel, function ends
    if (!passwordLength) {
      return;
    }
    var lowerPrompt = prompt("Enter Y to include lowercase letters", "Y");
    if (lowerPrompt === "Y") {
      selectedCharacters.push(...lower)
      console.log(selectedCharacters);
    }
    else {
      lowerPrompt = false;
      console.log("lowercase letters not included");
    }
    var upperPrompt = prompt("Enter Y to include uppercase letters", "Y");
    if (upperPrompt === "Y") {
      selectedCharacters.push(...upper)
      console.log(selectedCharacters);
    }
    else {
      upperPrompt = false;
      console.log("uppercase letters not included");
    }
    var numbersPrompt = prompt("Enter Y to include numbers", "Y");
    if (numbersPrompt === "Y") {
      selectedCharacters.push(...numbers)
      console.log(selectedCharacters);
    }
    else {
      numbersPrompt = false;
      console.log("numbers not included");
    }
    var symbolsPrompt = prompt("Enter Y to include symbols", "Y");
    if (symbolsPrompt === "Y") {
      selectedCharacters.push(...symbols)
      console.log(selectedCharacters);
    }
    else {
      symbolsPrompt = false;
      console.log("symbols not included");
    }
  }

  var selectedCharacters = []

  function createPassword() {
    password += selectedCharacters(Math.floor(Math.random() * selectedCharacters.length));
    for (var i = 0; i < passwordLength; i++) {
    }
  }

  function outputPassword() {
    password = createPassword();
    var passwordText = document.getElementById("password");

    passwordText = password; 
    
  }

// generatePassword();

  // document.getElementById("#password");

  // return ("#password");

  // getParams.paramPrompts();
  // const writePassword = {
    // if (getParams.paramPrompts.inclLower === !false) {
    // inclLower = Math.floor(Math.random() * lower.length);
    // console.log(lower[inclLower]);
    // }
    // if (getParams.paramPrompts.incUpper === !false) {
    // inclUpper = Math.floor(Math.random() * upper.length);
    // console.log(upper[inclUpper]);
    // }
    // if (getParams.paramPrompts.inclNumbers === !false) {
    // inclNumbers = Math.floor(Math.random() * numbers.length);
    // console.log(numbers[inclNumbers]);
    // }
    // if (getParams.paramPrompts.inclSymbols === !false) {
    // inclSymbols = Math.floor(Math.random() * symbols.length);
    // console.log(symbols[inclSymbols]);
    // }


















