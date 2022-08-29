

// function to check the existence of a number at the begining or end of an array
function arrayCheck(arr, num) {
    if (arr[0] === num || arr[arr.length - 1] === num) {
      return true
    } else
      return false;
  }
  console.log(arrayCheck([0, 2, 5, 1], 1));
  