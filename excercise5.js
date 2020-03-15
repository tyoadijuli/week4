function ubahHuruf(kata) {
    // you can only write your code here!
    var before = 'abcdefghijklmnopqrstuvwxyz'
    var after = 'bcdefghijklmnopqrstuvwxyza'
    var result = ''
    for ( var i=0; i < kata.length; i++){
        for ( var j = 0; j< before.length; j++){
            if( kata[i] === before[j]){
                result += after[j]
            }
        }
    }
    return result
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu