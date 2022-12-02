function fibRec(n) {
  if (n < 3) {
    return 1;
  } else {
    return fibRec(n - 1) + fibRec(n - 2);
  }
}

fibRec(5);
