//Declare the word variable and assign the value
const word = "00000111110101001111100001001";

//Declare two empty Strings
let currentChain = "";
let longestChain = "";

//Start a loop that iterates over each character in the word using the index 'i'.
for (let i = 0; i < word.length; i++) {
  //Retrieve the current character at index i using word[i] and assign it to the currentChar variable.
  const currentChar = word[i];
  //Check if currentChar is equal to '1', indicating a letter in the chain.
  if (currentChar === "1") {
    //If currentChar is '1', add it to the currentChain using the concatenation operator +=.
    currentChain += currentChar;
  } else {
    //Check if the length of currentChain is greater than the length of longestChain.
    if (currentChain.length > longestChain.length) {
      //If the length of currentChain is greater than longestChain, update longestChain with the value of currentChain.
      longestChain = currentChain;
    }
    currentChain = "";
  }
}

if (currentChain.length > longestChain.length) {
  longestChain = currentChain;
}

//print the value of longestChain using console.log() to display the longest chain of 1s found in the word.
console.log("Longest chain of 1s:", longestChain);

//Output
//Longest chain of 1s: 111110
