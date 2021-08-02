/*Problem 2: Write java Program to Find Smallest and Largest Element in an Array.
Note: Number can not be repeated in the array.*/
//did my logic in js

let smallestElement;
let largestElement;

function findSmallestAndLargestElement(arr){
    let sortedArr = arr.sort((a, b) => a - b);
    smallestElement = sortedArr[0];
  
    largestElement = sortedArr[sortedArr.length-1];
  
  return smallestElement + ', ' + largestElement;
}


console.log(findSmallestAndLargestElement([7,5,6,1,4,2]));