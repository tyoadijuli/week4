function changeMe(arr) {
    // you can only write your code here!
   
    var biodata = {}
        // firstName : '',
        // lastName : '',
        // gender : '',
        // age : '',
    
    for ( i = 0; i <  arr.length; i++){
        biodata.firstName = arr[i][0]
        biodata.lastName = arr[i][1]
        biodata.gender = arr[i][2]
        biodata.age = 2020 - arr[i][3]
        if (arr[i][3] == undefined || arr[i][3] > 2020){
            biodata.age = "Invalid Birth Year"
        }
        console.log(i+1+'. ' + arr[i][0] +' '+ arr[i][1]+':' )
        console.log(biodata)

    }
    

  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 38 } //karena sekarang 2020 
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""