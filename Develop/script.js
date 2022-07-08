// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  // passwordText.value = generatePassword(length.value, characters);

  // Define characters that the password can contain:
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var symbols = ["!@#$%^&*()-_=+"]
const Y = true

// Add event listener to generate button
var length = Number(prompt("Enter a password length between 8 and 128"));

var inclLower = prompt("Include lowercase letters? Enter Y or N", "Y");
if (inclLower === true) { 
  Math.floor(Math.random() * lower.length);
} 
else { 
  console.log("lowercase letters not included");// Code moving to next operation
}

var inclUpper = prompt("Include uppercase letters? Enter Y or N", "Y");
if (inclUpper === true) { 
  Math.floor(Math.random() * upper.length);
} 
else { 
  null;// Code moving to next operation
}

var inclNumbers = prompt("Include numbers? Enter Y or N", "Y");
if (inclNumbers === true) { 
  Math.floor(Math.random() * numbers.length);
} 
else { 
  null;// Code moving to next operation
}

var inclSymbols = prompt("Include symbols?  Enter Y or N", "Y");
if (inclSymbols === true) {
  Math.floor(Math.random() * symbols.length);
}
else { 
  null;// Code moving to next operation
}


//Debugging code
function genPopup1() {
  var popup = window.open("", "DNH", "width=300,height=100");

  if (popup) {
    popup.document.body.innerHTML = "<p>" + popup.opener.dnhUrl + "</p>";
    
    popup.document.body.innerHTML = popup.document.body.innerHTML + 
    "<button onclick='parent.opener.ShowConfirm();'>Trigger Confirm</button>";
    
    popup.document.title = popup.name;

    popup.opener.document.body.innerHTML = "<p>Loaded!</p>";
  } else {
    document.body.innerHTML = "<p>Not loading!</p>";
  }
}
function ShowConfirm(){
confirm("this window is active?");
}




