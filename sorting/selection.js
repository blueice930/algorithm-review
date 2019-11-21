const selection = (arr) => {
  n = arr.length
  for (i = n-1; i>=0; i--) {
    max = arr[0]
    index = 0
    for (j = 0; j <= i; j++) {
      if (arr[j] >= max) {
        max = arr[j]
        index = j
      }
    }
    arr[index] = arr[i]
    arr[i] = max
  }
  return arr
}// find max / min in each iteration
