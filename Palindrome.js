function palindrome(str) {
  return str.replace(/[\W_]/g, '').toLowerCase() === str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}



debug(palindrome("eye"));
debug(palindrome("Eye"));
debug(palindrome("EyE"));
debug(palindrome("Racecar"));
debug(palindrome("RaceCar"));
debug(palindrome("race Car"));
debug(palindrome("not a palindrome"));