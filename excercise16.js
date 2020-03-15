function graduates (students) {
    // Code disini
    var foxes = []
    var wolves = []
    var tigers = []
    hasil = {
        foxes : [],
        wolves : [],
        tigers : []
    }
  
    
    

    for ( var i = 0; i < students.length; i++){
        
        if (students[i].class == 'foxes'){
            
            // foxes.push(students[i])
            var rubah = {
                name : students[i].name,
                score : students[i].score
            }
            foxes.push(rubah)
            
            
        }
    }
    for( var k = 0; k < foxes.length; k++){
        if (foxes[k].score > 75){
            hasil.foxes.push(foxes[k])

        }
    }
    for ( var i = 0; i < students.length; i++){
        
        if (students[i].class == 'wolves'){
            
            // wolves.push(students[i])
            var rubah = {
                name : students[i].name,
                score : students[i].score
            }
            wolves.push(rubah)
            
            
        }
    }
    for( var k = 0; k < wolves.length; k++){
        if (wolves[k].score > 75){
            hasil.wolves.push(wolves[k])

        }
    }

    for ( var i = 0; i < students.length; i++){
        
        if (students[i].class == 'tigers'){
            
            // tigers.push(students[i])
            var rubah = {
                name : students[i].name,
                score : students[i].score
            }
            tigers.push(rubah)
            
            
        }
    }
    for( var k = 0; k < tigers.length; k++){
        if (tigers[k].score > 75){
            hasil.tigers.push(tigers[k])

        } else if (tigers[k].length == 0){
          delete hasil.tigers
        }
    }
    if (students.length == 0){
        return {}
    }
    if (hasil.foxes == 0){
      delete hasil.foxes
    } if (hasil.wolves == 0){
      delete hasil.wolves
    } if (hasil.tigers == 0){
      delete hasil.tigers
    }
    return hasil
    
  }
  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
//   // {
//   //   foxes: [
//   //     { name: 'Alexander', score: 100 },
//   //     { name: 'Vladimir', score: 92 }
//   //   ],
//   //   wolves: [
//   //     { name: 'Alisa', score: 76 },
//   //   ],
//   //   tigers: [
//   //     { name: 'Viktor', score: 80 }
//   //   ]
//   // }
  
  
  console.log(graduates([])); //{}  