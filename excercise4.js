function cariModus(arr) {
    // you can only write your code here!
    var tampung = []
    var sama = 0
    // var angka = 0
    for ( i= 0; i < arr.length; i++){
      for ( var j = 0; j < arr.length; j++){
        if ( arr[i] == arr[j] && i != j){
          tampung.push(arr[i])
        } 
      }
    }
    for ( var k = 0; k < arr.length; k++){
      sama += arr[k]
      if (sama/arr.length == arr[k]){
        return -1
      }
    }
    if (tampung == 0){
      return -1
    }
    return tampung[0]
    
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1