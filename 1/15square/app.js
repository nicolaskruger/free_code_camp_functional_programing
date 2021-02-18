/**
 * 
 * @param {number[]} arr 
 */
const squareList = arr => {
    // Only change code below this line
    return arr.filter(v=>v>=0&&Number.isInteger(v))
            .map(s=>s*s);
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);