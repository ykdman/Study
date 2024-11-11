// // 기본 JS 내장 sort 메소드는 문자열로 변환하여 정렬한다.
// function numberCompare(num1, num2) {
//   return num1 - num2;
// }

// console.log([6, 4, 15, 10].sort(numberCompare));
// // [4, 6, 10, 15]

// bubble sort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

function bubbleSortV2(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        noSwap = false;
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (noSwap) break;
  }

  return arr;
}

// 버블 정렬 최적화
