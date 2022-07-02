// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
// ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13.
// If there are numbers or special characters included in the string, they should be returned as they are.
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  let rotArr = [];
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < message.length; i++) {
    let lowerCased = message[i].toLowerCase();
    let subbedLetter = "";
    if (ALPHABET.indexOf(lowerCased) !== -1) {
      if (ALPHABET.indexOf(lowerCased) > 12) {
        subbedLetter = ALPHABET[ALPHABET.indexOf(lowerCased) - 13];
      } else subbedLetter = ALPHABET[ALPHABET.indexOf(lowerCased) + 13];
      if (message[i] === message[i].toUpperCase()) {
        rotArr.push(subbedLetter.toUpperCase());
      } else {
        rotArr.push(subbedLetter);
      }
    } else rotArr.push(lowerCased);
  }
  return rotArr.join("");
}
