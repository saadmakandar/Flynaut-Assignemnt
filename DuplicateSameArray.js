//1. Find duplicates and same Values in two array
var fullWordList = ["1", "2", "3", "4", "5"];
var wordsToRemove = ["1", "2", "3"];

//Initialize two empty arrays to store the duplicate and same values found in the arrays.
var duplicates = [];
var sameValues = [];

//Iterate over each element in the "fullWordList" array using a 'for' loop.
// in the loop, variable 'i' represents the current index.
for (var i = 0; i < fullWordList.length; i++) {
  //Retrieve the current index using "fullWordList[i]" and assign to the varibale 'word'.
  var word = fullWordList[i];
  //Check if the 'word' exists in the 'wordsToRemove' array using 'includes' method
  //includes() medhod return true if the element found in the array otherwise return false.
  if (wordsToRemove.includes(word)) {
    //if the word is found in the 'wordsToRemove' array, it is considered to be same vale.
    //using push() method we can add both duplicate and sameValues array.
    duplicates.push(word);
    sameValues.push(word);
  }
}

//print the duplicate and same array
console.log("Duplicates:", duplicates); // Output: ['1', '2', '3']
console.log("Same Values:", sameValues); // Output: ['1', '2', '3']
