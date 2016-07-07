debug("Hello World!")

function reverseString(str) {
   splitString =  str.split('').reverse().join('');
   return splitString;
}

debug(reverseString("hello"));
