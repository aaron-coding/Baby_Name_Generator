var namesAry = ["Daenerys", "Joffrey", "Tyrion", "Jon", "Arya", "Gregor", "Sansa",
"Theon", "Cersei", "Jaime", "Drogo", "Eddard", "Margaery", "Robb", "Bran", "Tywin"]

function newName( j ) {
  var randomNum = Math.floor(Math.random()*namesAry.length);
  j.text( namesAry[randomNum] );
}