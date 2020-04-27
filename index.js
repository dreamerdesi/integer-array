//Solution for returning true/false if integers in an array have a difference of at least 1:

function checkArray(A) {
    let checkInteger;
    let result = 0;
    for (let i = 0; i < A.length; i++) {
      checkInteger = Math.abs(A[i] - A[i + 1]);
      if (checkInteger === 1) {
        result++;
        break;
      }
    }
    if (result > 0) {
      return true;
    } else {
      return false;
    }
  }
  const A = [10, 2, 8, 5, 8];
  checkArray(A);