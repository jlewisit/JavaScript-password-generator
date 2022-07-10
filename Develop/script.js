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

// var password = ""
// var generateBtn = document.querySelector("#generate");

// Output Password
// function writePassword() {
//   var pw = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = pw;

// }

generateBtn.addEventListener("click", () => {
  let characters = alpha;
  // incNumbers.checked ? (characters += numbers) : "";
  // incSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
});

//(**Starter Code**) Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

var passwordLength = Number(prompt("Enter a password length between 8 and 128"));
console.log(passwordLength)

  var lowerPrompt = prompt("Enter Y to include lowercase letters", "Y");
  if (lowerPrompt === "Y") { 
    inclLower = Math.floor(Math.random() * lower.length);
    console.log(lower[inclLower]);
  } 
  else {
    console.log("lowercase letters not included");
  }

  var upperPrompt = prompt("Enter Y to include uppercase letters", "Y");
  if (upperPrompt === "Y") { 
    inclUpper = Math.floor(Math.random() * upper.length);
    console.log(upper[inclUpper]);
  } 
  else { 
    console.log("uppercase letters not included");
  }

  var numbersPrompt = prompt("Enter Y to include numbers",  "Y");
  if (numbersPrompt === "Y") {
    inclNumbers = Math.floor(Math.random() * numbers.length);
    console.log(numbers[inclNumbers]);
  }
  else { 
    console.log("numbers not included");
  }

  var symbolsPrompt = prompt("Enter Y to include symbols", "Y");
  if (symbolsPrompt === "Y") {
    inclSymbols = Math.floor(Math.random() * symbols.length);
    console.log(symbols[inclSymbols]);
  }
  else { 
    console.log("symbols not included");
  }

  

// // Is not working with my arrays yet
// function generatePassword() {
//   for (var i = 0; i <= passwordLength.length; i++) {
//   var randomNum = Math.floor(Math.random * characters.length);
//     password += characters.substring(randomNum, randomNum +1);
//   console.log(password);
//   }
// }







