function highestScore (students) {
    // Code disini
    var foxes = []
    var wolves = []
    var tigers = []
    hasil = {
      foxes : {},
      wolves : {},
      tigers : {},
    }
    
    

    for ( var i = 0; i < students.length; i++){
        
        if (students[i].class == 'foxes'){
            
            // foxes.push(students[i])
            var rubah = {
                name : students[i].name,
                score : students[i].score
            }
            foxes.push(rubah)
            for ( a = 0; a < foxes.length-1; a++){
              
              if (foxes[a].score < foxes[a+1].score){
                var tamp = foxes[a]
                foxes[a] = foxes[a+1]
                foxes[a+1] = tamp
                
              }
            }
            
        } if (students[i].class == 'wolves'){
            
            // foxes.push(students[i])
            var serigala = {
                name : students[i].name,
                score : students[i].score
            }
            wolves.push(serigala)
            for ( a = 0; a < wolves.length-1; a++){
              if (wolves[a].score < wolves[a+1].score){
                var tamp = wolves[a]
                wolves[a] = wolves[a+1]
                wolves[a+1] = tamp
               
              }
            }
        } if (students[i].class == 'tigers'){
            
            // foxes.push(students[i])
            var macan = {
                name : students[i].name,
                score : students[i].score
            }
            tigers.push(macan)
            for ( a = 0; a < tigers.length-1; a++){
               if (tigers[a].score < tigers[a+1].score){
                var tamp = tigers[a]
                tigers[a] = tigers[a+1]
                tigers[a+1] = tamp
               
              } 
            }
            
        } 
       
    }
   
    
    if (students.length == 0){
      return {}
    }
    hasil.foxes = foxes[0]
    hasil.wolves = wolves[0]
    hasil.tigers = tigers[0]
    if (hasil.foxes == undefined){
      delete hasil.foxes
    } if (hasil.wolves == undefined){
      delete hasil.wolves
    } if (hasil.tigers == undefined){
      delete hasil.tigers
    }
    return hasil
    
    
    
    
  }
  
  // TEST CASE
  console.log(highestScore([
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
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
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
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}