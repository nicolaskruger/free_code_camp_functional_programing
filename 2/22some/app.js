/**
 * 
 * @param {number[]} arr 
 */
function checkPositive(arr) {
    // Only change code below this line
  
    return arr.some(n=>n>=0);
    // Only change code above this line
  }
  checkPositive([1, 2, 3, -4, 5]);