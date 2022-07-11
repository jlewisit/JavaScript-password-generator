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
var lowerPrompt = "";
var upperPrompt = "";
var numbersPrompt = "";
var symbolsPrompt = "";
// var generateBtn = document.querySelector("#generate");
// var passwordText = document.getElementById("password");

// (**Starter Code**) Add event listener to generate button
// generateBtn.addEventListener("click", writePassword); - ** IS THIS NEEDED???
document.getElementById("generate").addEventListener("click", getParams.paramPrompts);

var getParams = {
  paramPrompts: function() {
    passwordLength = Number(prompt("Enter a password length between 4 and 128"));
    console.log(passwordLength);
    // If user presses cancel, function ends
    if (!passwordLength) {
      return;
    }
    var lowerPrompt = prompt("Enter Y to include lowercase letters", "Y");
    if (lowerPrompt === "Y", lowerPrompt === true) {
      console.log("lowercase letters included");
    }
    else {
      lowerPrompt = false;
      console.log("lowercase letters not included");
    }
    var upperPrompt = prompt("Enter Y to include uppercase letters", "Y");
    if (upperPrompt === "Y", upperPrompt === true) {
      console.log("uppercase letters included");
    }
    else {
      upperPrompt = false;
      console.log("uppercase letters not included");
    }
    var numbersPrompt = prompt("Enter Y to include numbers", "Y");
    if (numbersPrompt === "Y", numbersPrompt === true) {
      console.log("numbers included");
    }
    else {
      numbersPrompt = false;
      console.log("numbers not included");
    }
    var symbolsPrompt = prompt("Enter Y to include symbols", "Y");
    if (symbolsPrompt === "Y", symbolsPrompt === true) {
      console.log("symbols included");
    }
    else {
      symbolsPrompt = false;
      console.log("symbols not included");
    }
  }
}

function writePassword() {
// getParams.paramPrompts();
  // const writePassword = {
    if (getParams.paramPrompts.inclLower === !false) {
    inclLower = Math.floor(Math.random() * lower.length);
    console.log(lower[inclLower]);
    }
    if (getParams.paramPrompts.incUpper === !false) {
    inclUpper = Math.floor(Math.random() * upper.length);
    console.log(upper[inclUpper]);
    }
    if (getParams.paramPrompts.inclNumbers === !false) {
    inclNumbers = Math.floor(Math.random() * numbers.length);
    console.log(numbers[inclNumbers]);
    }
    if (getParams.paramPrompts.inclSymbols === !false) {
    inclSymbols = Math.floor(Math.random() * symbols.length);
    console.log(symbols[inclSymbols]);
    }
    for (var i = 0; i < passwordLength; i++) {
      password += writePassword(Math.floor(Math.random() * characters.length));
    }
  }

    // else if (lowerPrompt === false, upperPrompt === true, numbersPrompt === true, symbolsPrompt === true) {
    //   inclUpper = Math.floor(Math.random() * upper.length);
    //   console.log(upper[inclUpper]);
    //   inclNumbers = Math.floor(Math.random() * numbers.length);
    //   console.log(numbers[inclNumbers]);
    //   inclSymbols = Math.floor(Math.random() * symbols.length);
    //   console.log(symbols[inclSymbols]);
    // }
    // else if (lowerPrompt === true, upperPrompt === false, numbersPrompt === true, symbolsPrompt === true) {
    //   inclLower = Math.floor(Math.random() * lower.length);
    //   console.log(lower[inclLower]);
    //   inclNumbers = Math.floor(Math.random() * numbers.length);
    //   console.log(numbers[inclNumbers]);
    //   inclSymbols = Math.floor(Math.random() * symbols.length);
    //   console.log(symbols[inclSymbols]);
    // }




  // function writePassword(obtainParameters, passwordLength)
  // for (var i = 0; i < passwordLength; i++) {
  //   password += obtainParameters(Math.floor(Math.random() * characters.length));
  //   // console.log(result);
  // }



// // Generate password - NOT WORKING
//   function writePassword(characters, passwordLength) {
//     for (var i = 0; i < passwordLength; i++) {
//     password += Math.floor(Math.random() * characters.length);
//      console.log(writePassword);
//     }
//   }
// writePassword();


//   // Output Password
//   function generatePassword() {
//     var pw = writePassword();
//     var passwordText = document.querySelector("#password");

//     var password = "";
//     passwordText.value = pw;  

//     console.log(password);

//   }
// generatePassword();


  // document.getElementById("#password");

  // return ("#password");





















