function urutkanAbjad(str) {
    // you can only write your code here!
    
    var nampung =[]
    for (var i=0; i<str.length; i++){
      var y = str[i]
      nampung.push(y)

  }

  for( var j= 0; j<nampung.length; j++){
    for ( var k = 0; k<nampung.length; k++){
        if(nampung[k] > nampung[k+1]){
            var tamp = nampung[k]
            nampung[k] = nampung[k+1]
            nampung[k+1] = tamp
        }
    }
  }
  var result = ""
  for(var k = 0; k < nampung.length; k++){
    result += nampung[k]
  }
  return result
}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'