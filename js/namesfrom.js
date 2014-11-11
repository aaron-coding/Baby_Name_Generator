var gameOfThronesNames = ["Daenerys", "Joffrey", "Tyrion", "Jon", "Arya", "Gregor", "Sansa",        
"Theon", "Cersei", "Jaime", "Drogo", "Eddard", "Margaery", "Robb", "Bran", "Tywin"]        
        
var orangeNames = [["Alex", "Vause"], ["Tiffany", "Doggett"], ["George", "Mendez"],
 ["Piper", "Chapman"], ["Suzanne", "Warren"], ["Dayanara","Diaz"], ["Galina", "Reznikov"], ["Lorna", "Morello"]
 , ["Nicky", "Nichols"], ["Poussey", "Washington"], ["Tricia", "Miller"], ["Carrie", "Black"], ["John", "Bennett"], 
 ["Tasha", "Jefferson"], ["Rosa", "Cisneros"], ["Claudette", "Pelage"]]
        
function newName( j, num ) {        

  console.log(num)   
  if (num === 1) { 
    var randomNum = Math.floor(Math.random()*gameOfThronesNames.length); 
    j.text( gameOfThronesNames[randomNum] );            
  } else {
    var randomNum = Math.floor(Math.random()*orangeNames.length); 
    j.text( orangeNames[randomNum][0] ); 
  }

}       
// function newLastName( j ) {
//   var randomNum = Math.floor(Math.random()*namesAry.length);
//   j.text( namesAry[randomNum] );
// }


// function generateName ( boolFirst, boolLast ) {
//   if (boolFirst && boolLast)
//
// };
        

// Alex         Vause        
// Tiffany                 Doggett        
// George         Mendez        
// Piper          Chapman                
// Suzanne         Warren        
// Dayanara         Diaz        
// Galina         Reznikov        
// Lorna         Morello        
// Nicky         Nichols        
// Poussey         Washington        
// Tricia         Miller        
// Carrie         Black        
// John         Bennett        
// Tasha         Jefferson        
// Rosa Cisneros                
// Claudette         Pelage        
        