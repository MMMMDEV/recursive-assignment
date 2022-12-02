let arr = [0, 2, 5, 3, 6, 8, 4, 9, 7];

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const firstHalf = array.slice(0, middle);
  const secondHalf = array.slice(middle);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(left, right) {
  const array = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }

  return array.concat(left, right);
}

console.log(mergeSort(arr));
