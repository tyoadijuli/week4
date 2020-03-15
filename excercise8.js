// function tukarBesarKecil(kalimat) {
//     // you can only write your code here!
//     var before = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     var after = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
//     var result = ''
//     for ( var i=0; i <kalimat.length; i++){
//         var isAlphabet = false
//         for( var j = 0; j<= before.length ; j++){
//             if( kalimat[i] == before[j] ){
//                 result += after[j]
//                 isAlphabet = true     
//             }
//         }
//         if (isAlphabet == false){
//             result += kalimat[i]
//         }
//     }
    
//     return result
//   }
  
  function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    
    var result = ''
    for ( var i=0; i <kalimat.length; i++){
        // console.log(kalimat[i])
        // console.log(kalimat[i].toUpperCase(), 'huruf besar')
        // console.log(kalimat[i].toLowerCase(), 'huruf kecil')
        if(kalimat[i] == kalimat[i].toUpperCase()){
            result += kalimat[i].toLowerCase()
        } else if( kalimat[i] == kalimat[i].toLowerCase()){
            result += kalimat[i].toUpperCase()
        }
        
        }
        return result
    }
    
    
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
  // 