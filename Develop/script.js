const lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const symbols = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+"];
// Object containing all potential characters
var characters = {
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
// var generateBtn = document.querySelector("#generate");
// var passwordText = document.getElementById("password");


// (**Starter Code**) Add event listener to generate button
// generateBtn.addEventListener("click", writePassword); - ** IS THIS NEEDED???
document.getElementById("generate").addEventListener("click", obtainParameters);

  function obtainParameters() { 
    var passwordLength = Number(prompt("Enter a password length between 4 and 128"));
    console.log(passwordLength);
    // If user pressed cancel, immediately end function
    if (!passwordLength) {
      return;
    }
    var lowerPrompt = prompt("Enter Y to include lowercase letters", "Y");
    if (lowerPrompt === "Y") {
      console.log("lowercase letters included");
      inclLower = Math.floor(Math.random() * lower.length);
      console.log(lower[inclLower]);
    }
    else {
      console.log("lowercase letters not included");
    }
    var upperPrompt = prompt("Enter Y to include uppercase letters", "Y");
    if (upperPrompt === "Y") {
      console.log("uppercase letters included");
      inclUpper = Math.floor(Math.random() * upper.length);
      console.log(upper[inclUpper]);
    }
    else {
      console.log("uppercase letters not included");
    }
    var numbersPrompt = prompt("Enter Y to include numbers", "Y");
    if (numbersPrompt === "Y") {
      console.log("numbers included");
      inclNumbers = Math.floor(Math.random() * numbers.length);
      console.log(numbers[inclNumbers]);
    }
    else {
      console.log("numbers not included");
    }
    var symbolsPrompt = prompt("Enter Y to include symbols", "Y");
    if (symbolsPrompt === "Y") {
      console.log("symbols included");
      inclSymbols = Math.floor(Math.random() * symbols.length);
      console.log(symbols[inclSymbols]);
    }
    else {
      console.log("symbols not included");
    }
  }



// Generate password - NOT WORKING
  function writePassword(characters, passwordLength) {
    for (var i = 0; i < passwordLength; i++) {
    password += Math.floor(Math.random() * characters.length);
     console.log(writePassword);
    }
  }
writePassword();

  // Output Password
  function generatePassword() {
    var pw = writePassword();
    var passwordText = document.querySelector("#password");

    var password = "";
    passwordText.value = pw;  

    console.log(password);

  }
generatePassword();
  // document.getElementById("#password");

  // return ("#password");





















