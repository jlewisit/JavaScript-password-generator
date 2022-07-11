var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var symbols = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+"];
// Array containing user selections
var selectedCharacters = [];
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


document.getElementById("generate").addEventListener("click", paramPrompts);

  function paramPrompts() {
    passwordLength = Number(prompt("Enter a password length between 8 and 128"));
    console.log(passwordLength);
    // If user presses cancel, function ends
    if (!passwordLength || passwordLength < 8) {
      alert("Password length must be a numerical number between 8 and 128");
      return;
    }
    var lowerPrompt = prompt("Enter Y to include lowercase letters", "Y");
    if (lowerPrompt === "Y") {
      // Pushes user selections into the selectedCharacters array
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
    if (lowerPrompt === false && upperPrompt === false && numbersPrompt === false && symbolsPrompt === false) {
    alert("At least one character type must be selected");
    return;
    }
    outputPassword();
  }

  function createPassword() {
    for (var i = 0; i < passwordLength; i++) {
      password += selectedCharacters[(Math.floor(Math.random() * selectedCharacters.length))];
    }
    return password;
  }

  function outputPassword() {
    password = createPassword();
    var passwordText = document.getElementById("password");

    passwordText.value = password;

  }























