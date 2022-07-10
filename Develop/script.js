// var lower = ["abcdefghijklmnopqrstuvwxyz"]
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var symbols = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+"];
// var char = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var char = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var Y = true;
var password = ""
var generateBtn = document.querySelector("#generate");

// Output Password
function writePassword() {
  var pw = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = pw;

}

var passwordLength = Number(prompt("Enter a password length between 8 and 128"));
console.log(passwordLength)

// Selects random lower array element
var inclLower = prompt("Include lowercase letters? Enter Y or N", "Y");
if (inclLower === "Y") { 
  for (var i = 0; i <= lower.length; i++);
  console.log(Math.floor(Math.random() * lower.length));
} 
else { 
  console.log("lowercase not included");
}

// Selects random upper array element
var inclUpper = prompt("Include uppercase letters? Enter Y or N", "Y");
if (inclUpper === "Y") { 
  for (var i = 0; i <= upper.length; i++);
  console.log(Math.floor(Math.random() * upper.length));
} 
else { 
  console.log("uppercase not included");
}

// Selects random numbers array element
var inclNumbers = prompt("Include numbers? Enter Y or N", "Y");
    if (inclNumbers === "Y") {
    console.log(Math.floor(Math.random() * numbers.length));
  }
    else { 
    console.log("numbers not included");
  }

// Selects random symbols array element  
var inclSymbols = prompt("Include symbols?  Enter Y or N", "Y");
if (inclSymbols === "Y") {
  console.log(Math.floor(Math.random() * symbols.length));
}
else { 
  console.log("symbols not included");
}

// This does not work with my arrays
function generatePassword() {
  for (var i = 0; i <= passwordLength.length; i++) {
  var randomNum = Math.floor(Math.random * char.length);
  password += char.substring(randomNum, randomNum +1);
  console.log(password);
  }
}

//(**Starter Code**) Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








