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
