function myFunction(myArray) {
  let even = [];
  let odd = [];
  let char = [];
 
  for (let i = 0; i < myArray.length; i++){
    if (typeof myArray[i] == "number") {
      if (myArray[i] % 2 == 0) {
        even.push(myArray[i]);
      }

      if (myArray[i] % 2 != 0) {
        odd.push(myArray[i]);
      }
    } else {
      char.push(myArray[i]);
    }
  }
  //my Object
  let returnObject = {
    evens: mySortMethod(even),
    odds: mySortMethod(odd),
    chars: mySortMethod(char),
  };
  return returnObject;
}

//my function for sorting

function mySortMethod(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j; 
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

let output = myFunction([3.0, "a", 7, "x", 20, "d", 4, "f", 8]);
console.log(output);
