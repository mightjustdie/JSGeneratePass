var characterLength = 8;
var choiceArr = [];
var specialCharArr = ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];
var lowercaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log("Button 'Generate Password' was clicked");
// Generate password based on criteria.
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }

// Display the generated password on the page.
return password;
}

function getPrompts(){
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
  return true;
}

// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts();
    var passwordText = document.querySelector("#password");
    if(correctPrompts) {
  var newPassword = generatePassword();

  passwordText.value = newPassword;
    } else {
      passwordText.value = "";
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
