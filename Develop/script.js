// Assignment Code
var generateBtn = document.querySelector("#generate");

// creates our random function
function randomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  var rand = Math.random();
  return Math.floor(min * (1 - rand) + rand * max);
}

function getRandomItem(list) {
  return list[randomInt(list.length)];
}
// the bulk of how the password generator works
function generatePassword() {
  var userInput = window.prompt("How many characters do you want your password to be?");

  var passwordLength = parseInt(userInput);

  // double checks to make sure the user knows their input was invalid
  if (isNaN(passwordLength)) {
    window.alert("That's not a number");
    return;
  } 

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("your password must be between 8 and 128 characters");
    return;
  }

  // prompts for user to decide what character types their password includes
  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?");
  var userWantsSymbols = window.confirm("Would you like to include symbols in your password?");
  var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?");
  var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password?");

  // creating arrays for the user to get options from
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseList = [];

  var optionsCart = [];

  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase();
  }

// pushes the selected arrays into the output for the generator
  if (userWantsNumbers === true) {
    optionsCart.push(numberList);
  }
  if (userWantsSymbols === true) {
    optionsCart.push(symbolList);
  }
  if (userWantsLowercase === true) {
    optionsCart.push(lowercaseList);
  }
  if (userWantsUppercase === true) {
    optionsCart.push(uppercaseList);
  }

  // defaults to lowercase password if no options were chosen
  if (optionsCart.length === 0) {
    optionsCart.push[lowercaseList];
  }

  var generatedPassword = "";
// uses our random function to select characters for the array according the requested length
  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart);
    var randomChar = getRandomItem(randomList);
    generatedPassword += randomChar;
  }
  // pushes our result out of the function for other pieces of code to use it
  return generatedPassword;


}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
