function XO(str) {
    let xBank = 0
    let oBank = 0
    
    for(let i = 0; i < str.length; i++){
      if( str[i] === "x" || str[i] === "X" ){
        xBank++
      } else if ( str[i] === "o" || str[i] === "O"){
        oBank++
      }
    } if (xBank == oBank){
         return true
    } else{
       return false
    }
}