var snacks = [
    {name : "Coklat", price : 15000},
    {name : "Permen Gusus", price : 4000 },
    {name : "Pringloss" , price : 16000}
]

// for ( var i = 0; i <= snacks.length; i++){
//     if ( i % 2 == 0){
//         console.log(snacks[i])
//     }
// }


var nama = "Tasya"
var hedon = 0
for ( var j = 0; j < snacks.length; j++){
    // console.log( nama + ' membeli ' + snacks[j].name + ' dengan harga ' + snacks[j].price)
    hedon += snacks[j].price
    
}
// console.log(nama + ' menghabiskan ' + hedon + ' rupiah' + ' untuk')
for ( var k = 0; k < snacks.length; k++){
    // console.log( k+1 +'. '+ snacks[k].name)
}


var uangTasya = 50000
var pajak = 0.01
var date = '30-01-2020'
var struk = {}

struk.namaToko = 'Mama Mart'
// struk.uangTasya = uangTasya
struk.barang = []
struk.date = date
struk.pajak = hedon* pajak
struk.total = hedon + (hedon* pajak)
struk.uang = uangTasya
struk.kembalian = uangTasya - struk.total

for(l=0; l < snacks.length; l++){
    struk.barang.push(snacks[l].name)
}
console.log(struk)

var snaksInFebruari = []
for( var y =0 ; y< snacks.length; y++){
    snaksInFebruari.push({
        name : snacks[y].name,
        price : snacks[y].price - 2000 

    })


}

console.log("\n--------------- JANUARY -----------------\n" )
console.log(snacks)
console.log("\n--------------- FEBRUARI -----------------\n")
console.log(snaksInFebruari)