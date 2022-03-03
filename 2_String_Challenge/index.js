function StringChallenge(str) {
    // create array of string breaking at non-alphabetic
    const newStr = str.split(/[^a-zA-Z]/)
    const resultArray = [];
    newStr.map((eachWord, index) => {
      if(index === 0) {
        // make the first word only lowercase
        const camelWord = eachWord.toLowerCase();
        resultArray.push(camelWord)
      }
      else {
        // capitalize first letter of the next words
        const camelWord = eachWord.charAt(0).toUpperCase() + eachWord.slice(1).toLowerCase();
        resultArray.push(camelWord);
      }
    })
    // return the resulting array in string format
    return resultArray.join('');

}

// keep this function call here 
console.log(StringChallenge('cAts AND*dogs@ArE#GooD pETS$'));