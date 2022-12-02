function fibs(num) {
  let arr = [0, 1];
  for (let i = 2; i <= num; i++) {
    let a = i - 1;
    let b = i - 2;
    arr.push(a + b);
  }
  console.log(arr);
}

fibs(12);
