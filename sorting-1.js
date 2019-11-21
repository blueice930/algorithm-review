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

const bubble = (arr) => {
  n = arr.length
  for (i = n-1; i >= 0; i--){
    for (j = 0; j < i; j++){
      if (arr[j] > arr[j+1]){
        temp = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}// get max in each iteration by compare adjacent elements

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
