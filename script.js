// define variables that include query selector and characters/number sets
var generateBtn = document.querySelector("#generate");
let lowerCharacterSet = "abcdefghijklmnopqrstuvwyxz";
let upperCharacterSet = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
let numberSet = "0123456789";
let specialCharacterSet = "!@#$%^&*()<>?:}{|\][-+=";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var charLength = prompt("Please enter the minimum length for your password. Note: Must be at least 8 characters in length and a maximum of 128 characters");
  charLength = parseInt (charLength);
  //check if the character length is no more that 128 but no less than 8
  if ((charLength >= 8) && (charLength <= 128) && (!isNaN(charLength))) {
    alert("Good Password");
    let includeLC = confirm("Press OK to include lowercase characters in password, press cancel otherwise")
    let validCharactersSet = "";
    // a series of prompts to validate what characters should and should not be included in password generation
    if (includeLC === true){
       validCharactersSet += lowerCharacterSet;
       alert("Your generated password will include lowercase characters")
    }

    let includeUC = confirm("Press OK to include uppercase characters in password, press cancel otherwise")
    if (includeUC === true){
       validCharactersSet += upperCharacterSet;
       alert("Your generated password will include uppercase characters")
    }

    let includeNum = confirm("Press OK to include numbers in password, press cancel otherwise")
    if (includeNum === true){
       validCharactersSet += numberSet;
       alert("Your generated password will include numbers")
    }

    let includeSpecial = confirm("Press OK to include special characters in password, press cancel otherwise")
    if (includeSpecial === true){
       validCharactersSet += specialCharacterSet;
       alert("Your generated password will include special characters")
    }

    console.log("valid character set = ", validCharactersSet);

    if (includeLC === false && 
      includeUC === false &&
      includeSpecial === false &&
      includeNum === false){

        alert("You need to choose at least one character set to generate a valid password, please retry")
        generatePassword();
      }
    // the random password generation. Use random index and multiply by valid character set length.
      let randomIndex = 0;
      let randomChar = "";
      let generatedPassword = "";

      for (let i=0; i< charLength; i++){
        randomIndex = Math.floor(Math.random() * validCharactersSet.length);
        randomChar = validCharactersSet[randomIndex];
        generatedPassword += randomChar;
      }
      //return the generated password
      return generatedPassword;

  } else if (isNaN(charLength) == true){
    return;
  } else if (charLength < 8){
    alert("Password too short");
    generatePassword();
  } else if (charLength > 128){
     alert("Password too long");
     generatePassword();
  } else {
    alert("Invalid Input! Please enter a whole number for the character length and please retry");
  }


}
