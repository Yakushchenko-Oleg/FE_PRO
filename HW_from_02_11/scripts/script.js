// Task 1. Code as fast as you can! You need to double the integer and return it.
const doubleInteger = (i) => i*2

// Task 2. You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd. Note: only positive integers will be tested.
const otherAngle = (a, b) =>  a && b > 0 ? 180 - a - b: "only positive integers will be tested";  
console.log(otherAngle(10, -90));

// Task 3. Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
const countSheep = function (num){
  const tempArr = [];
  for(i=1; i<=num; i++){
    tempArr.push(`${i} sheep...`)
  } return tempArr.join("")
}
console.log(countSheep(3));

// Task 4. Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:
function setAlarm(employed, vacation){
  return employed && !vacation ? true : false
  }

// Task 5. There is a bus moving in the city which takes and drops some people at each bus stop.
// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.
// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
var number = busStops => busStops.reduce( (accum,value) => accum + value[0] - value[1]  ,0)

 console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]));


// Task 6. All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
const feast = (beast, dish) =>  beast[0] === dish[0] && beast.at(-1) === dish.at(-1) && beast.length >=2  && dish.length >=2 ? true : false; 
console.log(feast('biraw', 'bw'))

// Task 7. You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square. If it is a square, return its area. If it is a rectangle, return its perimeter.
const areaOrPerimeter = (l , w) => l === w ? l * w : (l + w) * 2

// Task 8. Mess LaLiga, Copa del Rey, Champions, Complete the function to return his total number of goals in all three leagues. Note: the input will always be valid.
const goals =  (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => laLigaGoals >= 0 && copaDelReyGoals >=0 && championsLeagueGoals >= 0 ? laLigaGoals + copaDelReyGoals + championsLeagueGoals : "enter a valid datas";
console.log(goals(2 , 5 , 0));

// Task 9. Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.
const squareOrSquareRoot = arr => reaaultArray = arr.map(el => Math.sqrt(el).toString().includes('.') ? el * el: Math.sqrt(el))
console.log(squareOrSquareRoot([0, 3, 9, 32, 36]));

// Task 10. Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.The output should be two capital letters with a dot separating them.

const abbrevName = name => name.split(' ').map((el) => el.slice(0, 1)).join('.').toUpperCase()
console.log(abbrevName("John doe"))

// Task 11. Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
function mergeArrays(a, b) {
  const newArr = [...a.sort(), ...b.sort()]
return newArr.filter((elem, index) => newArr.indexOf(elem) == index).sort()
}
console.log(mergeArrays([1, 7, 8, 9], [2, 8, 3, 1])) // в codewars не принимается решение

// Task 12. I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.P.S. Each array includes only integer numbers. Output is a number too.
const arrayPlusArray =(arr1, arr2) => [...arr1,...arr2].reduce((acc, vel) => acc+vel)
console.log(arrayPlusArray([1, 7, 8, 9], [2, 8, 3, 1]))

// Task 13. Given an array of integers. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.If the input is an empty array or is null, return an empty array.

// function countPositivesSumNegatives(input) {
//   return expectedArr = input.map((el) => {
//     if (typeof el === "number") {
//       if (el > 0 ) { expectedArr[0] += 1 
//       } else {expectedArr[1] += el}
//     } else { exampleArr = []}
//   })}

//   const exampleArr = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]
//   console.log(countPositivesSumNegatives(exampleArr));

// Task 14.You get an array of numbers, return the sum of all of the positives ones.

const positiveSum = arr => {
  const sum = 0;
  for (let i = 0; i < arr.length; i++) { if (arr[i] > 0) {sum =+ arr[i]
  }
  }
  return sum
}

positiveSum([1,-4,7,12])