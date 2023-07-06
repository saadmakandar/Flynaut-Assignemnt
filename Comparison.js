//The expression "7" > 7 is comparing a string "7" with a number 7.
//In this case, the string "7" is converted to a number, resulting in the comparison 7 > 7.
//return 'false' because 7 is not greater than 7
console.log("7" > 7); //output: false

//comparing two strings
//when comparing strings, js perfromed character by character comparison
//In this case, the first characters being compared are "2" and "2".
//JavaScript moves to the next characters: "2" and "1".
//"2" has a greater  than "1".
console.log("2" > "21"); //output: 'true'

//comparing two Strings
//The first characters being compared are "K" and "S".
//"K" has a smaller UTF-16 code point value than "S"
console.log("KL" > "S"); //output: 'false'

//output
//false
//true
//false
