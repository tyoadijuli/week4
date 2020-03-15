function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var res = []
    for ( var i=1; i<=angka; i++){
        for(var j=1; j<= angka; j++){
            if ( i * j == angka){
                res.push(i + '' + j)
            }
            
        }
    }
    for (var k=0; k < res.length; k++){
        for (var l =0; l < res.length; l++){
          if( res[l] > res[l+1]){
            var tamp = res[l]
            res[l] = res[l+1]
            res[l+1] = tamp
          
          }
        }
        
      }
      var fix = res[res.length-1]
  return fix.length

  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2