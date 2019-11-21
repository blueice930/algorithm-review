const insertion = (arr) => {
  n = arr.length
  for (i = 0; i < n; i++) {
    key = arr[i]
    j = i - 1
    while (j >= 0 && arr[j] > key) {
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = key
  }
  return arr
}// do insert() for n-1 time
//insert: from right to left find position of key
//and shift right other elements
