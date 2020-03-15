function shoppingTime(memberId, money) {
    // you can only write your code here!
    var stock = [{barang : 'Sepatu Stacattu', harga : 1500000},
     {barang : 'Baju Zoro', harga : 500000},
     {barang : 'Baju H&N', harga : 250000},
    {barang : 'Sweater brand Uniklooh', harga : 175000},
     {barang : 'Casing Handphone', harga : 50000} ]

     if(memberId == '' || memberId == undefined ){
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    } else if ( money < 50000){
        return "Mohon maaf, anda miskin"
    }
    // console.log("memberId : " + memberId)
    // console.log("money : " + money)
    listPurchased = []
    var res = {}
   res.memberId = memberId
   res.money = money
    
   for(a = 0; a < stock.length; a++){
       
    //    console.log('hasilnya' + sisaan)
       if(money >= stock[a].harga){
           listPurchased.push(stock[a].barang)
           money -= stock[a].harga
        //    sisaan += stock[a].harga
       }
// change = aaa - sisaan
// console.log(change)
       
   }
  
   
   res.listPurchased = listPurchased
   res.changeMoney = money
   return res
   
   
    
  }
   




  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 310000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja