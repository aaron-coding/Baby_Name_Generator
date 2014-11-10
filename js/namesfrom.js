var namesAry = ["Daenerys", "Joffrey", "Tyrion", "Jon", "Arya", "Gregor", "Sansa",        
"Theon", "Cersei", "Jaime", "Drogo", "Eddard", "Margaery", "Robb", "Bran", "Tywin"]        
        
var OrangeNames = ["Alex", "Tiffany", "George", "Piper", "Suzanne", "Dayanara",
"Galina", "Lorna", "Nicky", "Poussey", "Tricia", "Carrie", "John", "Tasha",
"Rosa", "Claudette"]
        
function newName( j ) {        
  var randomNum = Math.floor(Math.random()*namesAry.length);        
  j.text( namesAry[randomNum] );        
}       
function newLastName( j ) {        
  var randomNum = Math.floor(Math.random()*namesAry.length);        
  j.text( namesAry[randomNum] );        
}        
        

// Alex         Vause        
// Tiffany                 Doggett        
// George         Mendez        
// Piper Chapman                
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
        