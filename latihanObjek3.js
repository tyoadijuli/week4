var barang = [
    {
        nama : 'Roti',
        jenis : [
            {
                isi : 'Coklat',
                harga : 13000
            },
            {
                isi : 'Keju',
                harga : 11000
            },
            {
                isi : 'Kacang',
                harga : 8000
            }
        ]
    }
]
var tes =[
    {
        a:[4,5]
    }
]
// console.log(tes[0].a[1])
// console.log(barang[0].jenis)
// var hasil = []
for( var i =0; i < barang[0].jenis.length; i++){
    // hasil.push(barang[0].jenis[i])
    console.log("Roti isi " + barang[0].jenis[i].isi + " harga "+ barang[0].jenis[i].harga)
    
}
// console.log(hasil)