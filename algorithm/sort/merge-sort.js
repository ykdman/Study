// 병합 함수 (정렬이 아닌 두 배열을 합치는 함수)
function mergeArr(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] >= arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

// console.log(mergeArr([1, 10, 50], [2, 14, 99, 100]));

// 병합 정렬
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArr(left, right);
}

console.log(mergeSort([10, 25, 56, 1, 5, 53, 74])); // [1, 5, 10, 25, 53, 56, 74]
