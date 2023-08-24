export const shuffleOrder = arr => {
    let currIdx = arr.length;
    let tempVal, randomIdx;
  
    while (0 !== currIdx) {
      randomIdx = Math.floor(Math.random() * currIdx);
      currIdx -= 1;
  
      // swap with current element
      tempVal = arr[currIdx];
      arr[currIdx] = arr[randomIdx];
      arr[randomIdx] = tempVal;
    }
  
    return arr;
  };
  