function titleCase(str) {
  var newStr = str.split(' ');
  for (var i = 0; i < newStr.length; i++) {
      var copy = newStr[i].substring(1).toLowerCase();
      newStr[i] = newStr[i][0].toUpperCase() + copy;
  }
  newStr = newStr.join(" ");
  return newStr;
}

console.log(titleCase("I'm a little tea pot"));
// console.log(titleCase("sHoRt AnD sToUt"));
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
// Here are some helpful links:
// String.prototype.split()



// titleCase("I'm a little tea pot") should return a string.
// titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt") should return "Short And Stout".
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".