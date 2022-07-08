const lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const symbols = ["!","@","#","$","%","^","&","*","(",")","-","=","+"];
var password = ""
var generateBtn = document.querySelector("#generate");

// Output Password
function writePassword() {
  var pw = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = pw;

}

var char = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const Y = true;

// Generate password characters
var passwordLength = Number(prompt("Enter a password length between 8 and 128"));
console.log(passwordLength)

var inclLower = prompt("Include lowercase letters? Enter Y or N", "Y");
if (inclLower === true) { 
  for (var i = 0; i <= lower.length; i++);
  Math.floor(Math.random() * lower.length);
  console.log(inclLower)
} 
else { 
  null;// Code moving to next operation
}

var inclUpper = prompt("Include uppercase letters? Enter Y or N", "Y");
if (inclUpper === true) { 
  Math.floor(Math.random() * upper.length);
  console.log(inclUpper)
} 
else { 
  null;// Code moving to next operation
}

var inclNumbers = prompt("Include numbers? Enter Y or N", "Y");
if (inclNumbers === true) { 
  Math.floor(Math.random() * numbers.length);
  console.log(inclNumbers)
} 
else { 
  null;// Code moving to next operation
}

var inclSymbols = prompt("Include symbols?  Enter Y or N", "Y");
if (inclSymbols === true) {
  Math.floor(Math.random() * symbols.length);
  console.log(inclSymbols)
}
else { 
  null;// Code moving to next operation
}

function generatePassword() {
  for (let i = 0; i < passwordLength.length; i++) {
  var randomNum = Math.floor(Math.random * char.length)
  password += char.substring(randomNum, randomNum +1)
  console.log(password);
  }
}


// (**Starter Code**) Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








// //Console debugging code
// function genPopup1() {
//   var popup = window.open("", "DNH", "width=300,height=100");

//   if (popup) {
//     popup.document.body.innerHTML = "<p>" + popup.opener.dnhUrl + "</p>";
    
//     popup.document.body.innerHTML = popup.document.body.innerHTML + 
//     "<button onclick='parent.opener.ShowConfirm();'>Trigger Confirm</button>";
    
//     popup.document.title = popup.name;

//     popup.opener.document.body.innerHTML = "<p>Loaded!</p>";
//   } else {
//     document.body.innerHTML = "<p>Not loading!</p>";
//   }
// }
// function ShowConfirm(){
// confirm("this window is active?");
// }




