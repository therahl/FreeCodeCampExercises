//These are the algorithms as I have solved them on freecodecamp.com
//Beginning with the least difficult algorithm and learning as I go

//---------------------------------------------------------------------------
// Reverse a string
function reverseString(str) {
  var split = str.split('');
  var reverse = split.reverse();
  var join = reverse.join('');
  return join;
}

reverseString('hello');

//---------------------------------------------------------------------------
// Factorialize a number
function factorialize(num) {
  var asd = num;
  for(i=1;i<num;i++) {
    asd *= i;
  }
  return asd;
}

factorialize(5);

//---------------------------------------------------------------------------
// Palindromes!!!
function palindrome(str) {
  var re = /\*s/;
  if (str.toLowerCase().replace(/[^a-z]+/g, '').split('').reverse().join('') === str.toLowerCase().replace(/[^a-z]+/g, '')) {
    return true;
  } else {
    return false;
  }
}

palindrome("eye");

//---------------------------------------------------------------------------
// Find the longest word in a string
function findLongestWord(str) {
  var animal = str.split(' ');
  var longest = "a";
  for(i=0;i<animal.length;i++) {
    if(animal[i].length > longest.length) {
      longest = animal[i];
    }
  }
  return longest.length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');

//---------------------------------------------------------------------------
// Title case a sentence
function titleCase(str) {
  var strArray = str.split(' ');
  var letterStrArray = [];
  for(i=0;i<strArray.length;i++) {
    letterStrArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1).toLowerCase();
  }
  var fff = letterStrArray.join(' ');
  return fff;
}

titleCase("I'm a little tea pot");

//---------------------------------------------------------------------------
// Return largest numbers in arrays
function largestOfFour(arr) {
  for(i=0;i<arr.length;i++) {
    for(j=0;j<arr[i].length;j++) {
      arr[i] = Math.max.apply(Math, arr[i]);
     }
  }
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//---------------------------------------------------------------------------
// Confirm the ending
function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor\
  if(target === str.substr(-target.length)) {
    return true;
  } else {
    return false;
  }
}

end('Bastian', 'n');

//---------------------------------------------------------------------------
// Repeat a string repeat a string
function repeat(str, num) {
  var newStr = '';
  if(num>0) {
    for(i=0; i<num;i++) {
      newStr += str;
    }
    return newStr;
  } else {
    var str = "";
    return str;
  }
}
repeat('abc', 3);

//---------------------------------------------------------------------------
// Truncate a string
function truncate(str, num) {
  var trun = num - 3;
  if(str.length > num) {
    str = str.slice(0,trun) + '...';
    return str;
  } else {
    return str;
  }
}

truncate('A-tisket a-tasket A green and yellow basket', 11);

//---------------------------------------------------------------------------
// Chunky monkey
function chunk(arr, size) {
  var finalArray = [];
  var count = size;
  for(i=0;i<arr.length/size;i++) {
    finalArray[i] = arr.slice(count-size,count); count += size;
  }
  return finalArray;
}

chunk(['a', 'b', 'c', 'd'], 2);

//---------------------------------------------------------------------------
// Slasher flick
function slasher(arr, howMany) {
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);
//---------------------------------------------------------------------------
// Make a person
var Person = function(firstAndLast) {
  nameArray = firstAndLast.split(' ');
  this.getFirstName = function() {
    return nameArray[0];
  };
  this.getLastName = function() {
    return nameArray[1];
  };
  this.getFullName = function() {
    return nameArray.join(' ');
  };
  this.setFirstName = function(first) {
    nameArray[0] = first;
    return nameArray[0];
  };
  this.setLastName = function(last) {
    nameArray[1] = last;
    return nameArray[1];
    };
  this.setFullName = function(full) {
    newName = full.split(' ');
    nameArray[0] = newName[0];
    nameArray[1] = newName[1];
    return nameArray.join(' ');
  };
};

var bob = new Person('Bob Ross'); bob.getFullName();


//falsey bouncer
function bouncer(arr) {
  var clean = arr.filter(Boolean);
  return clean;
}

bouncer([7, 'ate', '', false, 9]);


// --------------------------------------------------------------------------
// Mutations
function mutation(arr) {
  var first = arr[0].split().join().toLowerCase().split('').sort();
  var second = arr[1].split().join().toLowerCase().split('').sort();
  counter = 0;
  for(i=0;i<Math.max(first.length,second.length);i++) {
    if(first[i] === first[i+1]) {
      first.splice(i,1);
    }
    if(second[i] === second[i+1]) {
      second.splice(i,1);
    }
  }

  for(i=0;i<second.length;i++) {
    for(j=0;j<first.length;j++) {
      if(second[i] === first[j]) {
        counter++;
      }
    }
  }

  if(counter === second.length) {
    return true;
  } else {
    return false;
  }
}

mutation(['hello', 'hey']);

// --------------------------------------------------------------------------
// Seek and Destroy
function destroyer() {
  var argOne = arguments[0];
  for(j=0;j<arguments.length;j++){
    for(i=0;i<argOne.length;i++) {
      if(argOne[i] === arguments[j]) {
        argOne.splice(i,1);
      }
    }
  }
  return argOne;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


//---------------------------------------------------------------------------
// Where do I belong
function where(arr, num) {
  arr.push(num);
  var sorted = arr.sort();
  for(i=0;i<sorted.length;i++){
    if(num === sorted[i]) {
      return i;
    }
  }
}

where([40, 60], 50);


//---------------------------------------------------------------------------
// Sum All Numbers In A Range
function sumAll(arr) {
  var high = Math.max.apply(null, arr);
  var low = Math.min.apply(null, arr);
  for(i=low+1;i<high;i++) {
    arr.push(i);
  }
  return arr.reduce(function(a,b){return a+b});
}

sumAll([1, 4]);


//---------------------------------------------------------------------------
// Missing Letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
function fearNotLetter(str) {
  var counter = 1;

  for(i=-1;i<str.length-1;i++) {
    if (str.charCodeAt(i+1) === (str.charCodeAt(i) + 1)) {
      counter++ ;
    }
  }

  if(counter === str.length) { return; }

  for(i=-1;i<str.length-1;i++) {
    if (str.charCodeAt(i+1) !== (str.charCodeAt(i) + 1)) {
      letter = String.fromCharCode(str.charCodeAt(i)+1);
    }
  }
  return letter;
}
fearNotLetter('ab');

//----------------------------------------------------------------------------
// Where art thou
// Make a function that looks through a list (first argument) and returns
// an array of all objects that have equivalent property values (second argument).
function where(collection, source) {
  var arr = [];
  var key = Object.keys(source);
  // What's in a name?
  for(i=0;i<collection.length;i++) {
    if(collection[i].hasOwnProperty(key) && collection[i][key] === source[key]) {
      arr.push(collection[i]);
    }
  }
  return arr;
}


where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });

//-------------------------------------------------------------------------
// Spinal Tap Case. Convert a string to spinal case.
// Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  if(str.replace(/\s/g,"") === str && str.replace(/_/g, "") === str) {
    str = str.split(/(?=[A-Z])/).join('-').toLowerCase();
  } else {
    var res = /[^a-z]/ig;
    str = str.toLowerCase().replace(res, '-');
  }
  return str;
}

spinalCase('This Is Spinal Tap');


//----------------------------------------------------------------------------
// Search and replace.
// Perform a search and replace on the sentence using the arguments
// provided and return the new sentence.
// First argument is the sentence the perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// NOTE: Preserve the case of the original word when you are replacing it.
// For example if you mean to replace the word 'Book' with the word 'dog',
// it should be replaced as 'Dog'

function replace(str, before, after) {
  var myArray = str.split(' ');
  var index = myArray.indexOf(before);

  if(myArray[index].charAt(0) === myArray[index].charAt(0).toUpperCase()) {
    var uWord = after.charAt(0).toUpperCase();
    uWord = uWord + after.substr(1);
    return str.replace(before, uWord);
  } else {
    return str.replace(before,after);
  }
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//--------------------------------------------------------------------------
// sum all primes up to and including the number

function sumPrimes(num) {

  var counter = 5;

  while(num > 3) {
    var isPrime = true;

    for(k=2;k<num;k++) {
      //not prime
      if(num % k === 0) {
        isPrime = false;
      }
    }

    if(isPrime) {
      counter += num;
    }

    num--;
  }
    return counter;
}

sumPrimes(10);

//---------------------------------------------------------------------------
// DNA Pairing.  match each character with the missing element and return a 2d array of each pair.

function pair(str) {
 var singles = str.split('');
 var group = [];

  for(i=0;i<singles.length;i++) {
   switch (singles[i]) {
     case 'C':
       group.push(['C','G']);
       break;
     case 'G':
       group.push(['G','C']);
       break;
     case 'T':
       group.push(['T','A']);
       break;
     case 'A':
       group.push(['A','T']);
       break;
     default:
       return false;
   }
   }
 return group;
}

pair("GCG");

//---------------------------------------------------------------------------
// Pig Latin. Translate the prvided string to Pig Latin.
// In strong need of refactoring, but it works.

function translate(str) {
  var fLetter = str.substr(0,1);
  var sLetter = str.substr(1,1)

  if( fLetter === 'a' || fLetter === 'e' || str.substr(0,1) === 'i' || str.substr(0,1) === 'o' || str.substr(0,1) === 'u') {

    return str.concat('way');

  } else if(sLetter === 'a' || sLetter === 'e' || sLetter === 'i' || sLetter === 'o' || sLetter === 'u') {

    var letters = str.split('');
    letters.shift();
    letters.push(str.substr(0,1)+'ay');
    var word = letters.join('');
    return word;

  } else {

    var letters = str.split('');
    letters.shift();
    letters.shift();
    letters.push(str.substr(0,2)+'ay');
    var word = letters.join('');
    return word;

  }

}

translate("consonant");

//---------------------------------------------------------------------------
// Roman Numeral Converter. Convert the given number into a roman numeral.
// All numbers less than 50.  Could add more cases to filter larger numbers.

function convert(num) {
  var rn = '';
  while(num > 0) {
    switch(num > 0) {
      case num>10:
        rn += 'X';
        num -= 10;
        break;
      case num === 9:
        rn += 'IX';
        num -= 9;
        break;
      case num >= 5:
        rn += 'V';
        num -= 5;
        break;
      case num === 4:
        rn += 'IV';
        num -= 4;
        break;
      case num < 5 && num > 0:
        rn += 'I';
        num -= 1;
        break;
      default:
        return rn;
    }

  }
 return rn;
}

convert(36);

//--------------------------------------------------------------------------
// sum all odd fibonacci numbers

function sumFibs(num) {
  var counter = 0;
  var fibs = [0,1];
  for(i=1;fibs[i]<=num;i++) {

    fibs.push(fibs[i]+fibs[i-1]);
   }

  for(p=0;p<fibs.length;p++) {
    if(fibs[p] % 2 !== 0 && fibs[p] <= num) {
      counter += fibs[p];
    }
  }
  return counter;
}

sumFibs(4);

//---------------------------------------------------------------------------
// Everything Be True -- check if the predicate returns truthey for all elements of a collection

function every(collection, pre) {
  var counter = 0;
  for(i=0;i<collection.length;i++) {
    if(collection[i][pre]) {
      counter++;
    }
  }
  if(counter === collection.length) {
    return true;
  } else {
    return false;
  }
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');

//----------------------------------------------------------------------------
// Binary Agents -- convert the binary string into text

function binaryAgent(str) {
  var letters = str.split(' ');
  var sentence = '';

  for(i=0;i<letters.length;i++) {
    sentence += String.fromCharCode(parseInt(letters[i], 2));
  }
  return sentence;
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');

//---------------------------------------------------------------------------
// flatten an array, recursive

function steamroller(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? steamroller(toFlatten) : toFlatten);
  }, []);
}

steamroller([1, [2], [3, [[4]]]]);

// --------------------------------------------------------------------------
// smallest common multiple
// Find the smallest number that is evenly divisible by all numbers in the
// provided range.

function smallestCommons(arr) {
  var sorted = arr.sort();
  var max = arr[1];
  var range = [];
  var counter = max;

  var i = 1;

  while(counter > 0) {
    counter = max;
    var value = max * i;
    for(k=1;k<=max;k++) {
      if(value % k === 0) {
        counter--;
      }
    }
    i++;
  }

  return max * (i-1);
}

smallestCommons([1,5]);

//---------------------------------------------------------------------------
// Validate US phone numbers
function telephoneCheck(str) {
  if(str.match(/^1*[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/)) {
    return true;
  } else {
    return false;
  }
}


telephoneCheck("555-555-5555");

//---------------------------------------------------------------------------
// arguments optional.  Create a function that sums two arguments together.
// If only one argument is provided, return a function that expects one
// additional argument and will return the sum.

function add() {
  var one = arguments[0];
  var two = arguments[1];
  if(!two && typeof one === 'number') {
    return function(x) {
      if(typeof x === 'number') {return one + x;} else {return;}
    };
  } else if(typeof one !== 'number' || typeof two !== 'number') {
    return;
  } else {
    return one + two;
  }
}

add(2,3);

//---------------------------------------------------------------------------
// Friendly date ranges. Implement a way of converting two dates into a more
// friendly date range that could be presented to a user.
// It must not show any redundant information in the date range.
// For example, if the year and month are the same then only the day range
// should be displayed. Secondly, if the starting year is the current year,
// and the ending year can be inferred by the reader, the year should be omitted.
// Input date is formatted as YYYY-MM-DD
function friendly(str) {
  var startDate = str[0].split('-');
  var endDate = str[1].split('-');
  var months = ['none','January ','February ','March ','April ','May ','June ','July ','August ','September ','November ','December '];
  var final = [];

  //find month and convert to relative month name
  var monthOne = months[parseInt(startDate[1])];
  var monthTwo = months[parseInt(endDate[1])];

  //find day and convert to number
  var dayOne = dayEnding(parseInt(startDate[2]));
  var dayTwo = dayEnding(parseInt(endDate[2]));

  //find year and convert to year
  var yearOne = startDate[0];
  var yearTwo = endDate[0];

  var finalOne = monthOne + dayOne + ', ' + yearOne;
  var finalTwo = monthTwo + dayTwo + ', ' + yearTwo;

  if(finalOne === finalTwo) {
    return [finalOne];
  } else if(yearOne === yearTwo && monthOne === monthTwo) {
    return [monthOne + dayOne,dayTwo];
  } else if(yearOne === yearTwo || months[months.indexOf(monthOne)] === months[months.indexOf(monthTwo + 2)]) {
    return [monthOne + dayOne, monthTwo + dayTwo + ', ' + yearTwo];
  } else {
    return [monthOne + dayOne + ', ' + yearOne, monthTwo + dayTwo + ', ' + yearTwo];
  }
}

function dayEnding(day) {
    var endings = ['st','nd','rd','th'];
    if(day === 1 || day === 21 || day === 31) {
      return day + endings[0];
    } else if(day === 2 || day === 22) {
      return day + endings[1];
    } else if(day === 3 || day === 23) {
      return day + endings[2];
    } else {
      return day + endings[3];
    }

}

friendly(['2015-07-01', '2015-07-04']);

//---------------------------------------------------------------------------
// Map the debris.  Return a new array that transforms the element's
// average altitude into their orbital periods.
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArray = [];

  for(i=0;i<arr.length;i++) {
    var obj = {};
    obj.name = arr[i].name;
    obj.orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[i].avgAlt + earthRadius, 3)/GM));
    newArray.push(obj);
  }

  return newArray;

}

orbitalPeriod([{name : "sputkin", avgAlt : 35873.5553}]);

// -------------------------------------------------------------------------
// Pairwise. Return the sum of all indices of elements of 'arr' that can be
// paired with one other element to form a sum that equals the value in the
// second argument 'arg'. If multiple sums are possible, return the smallest
// sum. Once an element has been used, it cannot be reused to pair with another.
//
// For example, pairwise([1, 4, 2, 3, 0, 5], 7) should return 11 because 4, 2, 3
// and 5 can be paired with each other to equal 7.
//
// pairwise([1, 3, 2, 4], 4) would only equal 1, because only the first two
// elements can be paired to equal 4, and the first element has an index of 0!

function pairwise(arr, arg) {
  var sum = 0;
  for(i=0;i<arr.length;i++) {
    var test = arr[i];
    for(j=i+1;j<arr.length;j++) {
      if(arr[i] + arr[j] === arg) {
        sum += arr.indexOf(arr[i]);
        sum += arr.indexOf(arr[j]);
        arr[i] = 100;
        arr[j] = 100;
      }
    }

  }

  return sum;
}

pairwise([1,4,2,3,0,5], 7);
