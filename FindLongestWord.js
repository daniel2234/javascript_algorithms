function findLongestWord(str) {
  strSplit = str.split(' ');
  longestWord = 0;
  

  for (var i = 0; i < strSplit.length; i++){
   if (strSplit[i].length > longestWord){
    longestWord = strSplit[i].length;
   }    
  }
  return longestWord;
}

debug(findLongestWord("The quick brown fox jumped over the lazy dog"));
