var characterLength = 8;
var choiceArr = [];

var specialCharArr = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
var lowercaseArr = ["abcdefghijklmnopqrstuvwxyz"];
var uppercaseArr = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numberArr = ["1234567890"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log("Button 'Generate Password' was clicked");
// 1. Prompt user for the password criteria.
characterLength = parseInt(prompt("How many characters do you want your password to be? Between 8-128 characters"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128){
    alert("Character length input is invalid");
    return false;
  }

  if (confirm("Would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowercaseArr);
  }

  if (confirm("Would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(uppercaseArr);
  }

  if (confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }

  if (confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return console.log(choiceArr);
// 3. Generate password based on criteria.



// 4. Display the generated password on the page.
  return "Generated password will go here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
