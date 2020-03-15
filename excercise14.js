function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var res = []
   
    for (var i = 0; i < arrPenumpang.length; i++){
        var tarif ={
            penumpang : arrPenumpang[i][0],
            naikDari : arrPenumpang[i][1],
            tujuan : arrPenumpang[i][2],
            bayar : 0
        }
        res.push(tarif)
        var awal = 0
        var akhir = 0
        var total = 0
        for ( var j = 0; j < rute.length; j++){
            
                if (tarif.tujuan == rute[j]){
                    akhir = j
                    // console.log(awal)
                } if (tarif.naikDari == rute[j]){
                    awal = j
                    // console.log(akhir)
              
            }
            
        }
        total = Math.abs(akhir - awal) * 2000
            // console.log(total)
        tarif.bayar = total
    }

  return res
  }

  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]