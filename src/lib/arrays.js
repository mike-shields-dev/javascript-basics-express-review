const getNthElement = (index, array) => {
  return array[index%array.length]
};

const arrayToCSVString = array => {
  return array.toString()
};

const csvStringToArray = string => {
  return string.split(',')
};

const addToArray = (element, array) => {
  array.push(element)
};

const addToArray2 = (element, array) => {
  return array.concat(element)
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1)
};

const numbersToStrings = numbers => {
  return numbers.join().split(',')
};

const uppercaseWordsInArray = strings => {
  return strings.map((word)=>word.toUpperCase())
};

const reverseWordsInArray = strings => {
  return strings.map(word=>word.split('').reverse().join(''))
};

const onlyEven = numbers => {
  return numbers.filter(num=>num%2===0)
};

const removeNthElement2 = (index, array) => {
  return array.filter(item=>array.indexOf(item)!=index)
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(word=>/^[aeiou]/i.test(word))
};

const removeSpaces = string => {
  return string.split(' ').join('')
};

const sumNumbers = numbers => {
  return numbers.reduce((a,b)=>a+b,0)
};

const sortByLastLetter = strings => {
  return strings.sort((a,b)=>a.charCodeAt(a.length-1)-b.charCodeAt(b.length-1))
   
}

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
