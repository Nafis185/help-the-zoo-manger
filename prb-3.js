function deleteInvalids(inputArr) {
  
  return inputArr.filter(
    (element) => typeof element === "number" && !isNaN(element)
  );
}

const inputArray = [1,null,undefined,18,-19,NaN,"12",[1, 2],{ ob: "lala" }]; 
const resultArray = deleteInvalids(inputArray);
console.log(resultArray);
console.log(typeof resultArray);

