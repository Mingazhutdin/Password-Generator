const button = document.querySelector(".generator_btn");
const textarea = document.querySelector(".generator__text");

let passwordLength = 8;
let isUpperCaseNeed = true;
let isLowerCaseNeed = true;
let isSpecialCharNeed = true;
let isNumbersNeed = true;

button.addEventListener("click", () => {
  passwordLength = Number(prompt("Enter your password length", 0));
  console.log(typeof passwordLength);
  isUpperCaseNeed = confirm("Do you want to use Upper Case Letters?");
  isLowerCaseNeed = confirm("Do you want to use Lower Case Letters?");
  isSpecialCharNeed = confirm("Do you want to use Special Characters?");
  isNumbersNeed = confirm("Do you want to use Numbers?");

  const result = generateCode(
    passwordLength,
    isUpperCaseNeed,
    isLowerCaseNeed,
    isSpecialCharNeed,
    isNumbersNeed
  );
  textarea.value = result;
});

//

function generateCode(length, isUpperCase, isLowerCase, isSpecChar, isNum) {
  if (length >= 8 && length < 128) {
    const upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specials = "!|\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    let usedChar = "";

    if (isUpperCase) {
      usedChar = usedChar.concat(upLetters);
    }
    if (isLowerCase) {
      usedChar = usedChar.concat(lowLetters);
    }
    if (isNum) {
      usedChar = usedChar.concat(numbers);
    }
    if (isSpecChar) {
      usedChar = usedChar.concat(specials);
    }
    if (usedChar.length !== 0) {
      let password = "";

      for (let i = 0; i < length; i++) {
        password = password.concat(
          usedChar[Math.floor(Math.random() * usedChar.length)]
        );
      }
      return password;
    } else {
      return "Please choose any type of characters";
    }
  } else {
    return "Too long or too short password length";
  }
}
