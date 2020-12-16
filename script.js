// Assignment Code
let generateBtn = document.querySelector("#generate");

let passwordTextarea = document.querySelector("#password");
let generateButton = document.querySelector("#generate");
let copyButton = document.querySelector("#copy");

const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
const numericalCharacters = "0123456789";
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";




// Conditions for Password Generation
function generatePassword() {
  let newPassword = "";
  let passwordCharset = "";
  let passwordLengthInput = prompt("Number of characters for your password?");
  if (Number(passwordLengthInput < 8) | Number(passwordLengthInput > 128) | isNaN(passwordLengthInput)) {
    alert("Enter a number between 8 and 128!");
    return;
  }
  var lowercaseCharactersInput = confirm("Do you want lowercase characters to be included in your password?");
  if (lowercaseCharactersInput) {
    passwordCharset += lowercaseCharacters;
  }
  let uppercaseCharactersInput = confirm("Do you want uppercase characters to be included in your password?");
  if (uppercaseCharactersInput) {
    passwordCharset += uppercaseCharacters;
  }
  let numericalCharactersInput = confirm("Do you want the numbers 0-9 to be included in this password?");
  if (numericalCharactersInput) {
    passwordCharset += numericalCharacters;
  }
  let specialCharactersInput = confirm("Do you want special characters to be included in this password?");
  if (specialCharactersInput) {
    passwordCharset += specialCharacters;
  }
  if (passwordCharset === "") {
    alert("Please select at least one type of character you would like to include!");
  }
  if (Number(passwordLengthInput >= 8) && Number(passwordLengthInput <= 128)) {
    for (var i = 0; i < passwordLengthInput; i++) {
      newPassword += passwordCharset.charAt(Math.floor(Math.random() * passwordCharset.length));
    };
    localStorage.setItem("password", newPassword);
    let newPasswordStr = localStorage.getItem("password");
    passwordTextarea.textContent = newPasswordStr;
  };
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword); copyButton.addEventListener("click", copyPassword);
