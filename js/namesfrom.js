
var orangeNames = [["Alex", "Vause"], ["Tiffany", "Doggett"], ["George", "Mendez"],
 ["Piper", "Chapman"], ["Suzanne", "Warren"], ["Dayanara","Diaz"], ["Galina", "Reznikov"], ["Lorna", "Morello"]
 , ["Nicky", "Nichols"], ["Poussey", "Washington"], ["Tricia", "Miller"], ["Carrie", "Black"], ["John", "Bennett"], 
 ["Tasha", "Jefferson"], ["Rosa", "Cisneros"], ["Claudette", "Pelage"]]
        
function newName( j, num, lname ) {        
  
  if (num === 1) {
    var aryToUse = gameOfThronesNames
  } else if (num === 2){
    var aryToUse = orangeNames        
  }  
  var randomNum = Math.floor(Math.random()*aryToUse.length); 
  j.text( aryToUse[randomNum]);            
  
  
  if (lname) {
    j.append(" " + lname);
  }
};  


     


var gameOfThronesNames = ["Addam", 
"Adrack", 
"Aegon", 
"Aegor", 
"Aelinor", 
"Aemon",
"Aenys", 
"Aeron", 
"Aerys", 
"Aerys", 
"Aggar",
"Aggo",
"Alannys", 
"Alerie", 
"Allana", 
"Alliser", 
"Allo",
"Alton", 
"Alys", 
"Amarylis", 
"Amory", 
"Anguy",
"Anya", 
"Areo", 
"Argalia", 
"Argilac", 
"Armeca",
"Aron", 
"Arthur", 
"Artys", 
"Arwaya", 
"Arya", 
"Arys", 
"Axel", 
"Axell", 
"Azor", 
"Baelor", 
"Baelor", 
"Balian",
"Balon", 
"Balon", 
"Bannen",
"Baratheon", 
"Barra",
"Barristan", 
"Benjen", 
"Beric", 
"Beric", 
"Beric", 
"Berrican", 
"Bert",
"Bessie",
"Bethany", 
"Bharbo",
"Billy",
"Biter",
"Blackmont", 
"Borba",
"Borcas",
"Boros", 
"Bowen", 
"Bran", 
"Brandon", 
"Brandon", 
"Brienne", 
"Bronn", 
"Bruni",
"Brynden", 
"Brynden", 
"Calla",
"Cassana", 
"Catelyn", 
"Cersei", 
"Ch'Vyalthan",
"Chella",
"Cheyk",
"Clea",
"Clegane",
"Cleon",
"Cohollo",
"Colen",
"Commard", 
"Cooper",
"Corin", 
"Cotter", 
"Craster",
"Cregan", 
"Cressen",
"Daario", 
"Daemon", 
"Daemon", 
"Daemon", 
"Daena", 
"Daenerys", 
"Daeron", 
"Dagmer",
"Daisy",
"Damon", 
"Danelle", 
"Dareon",
"Davos", 
"Derwa", 
"Desmond", 
"Deziel", 
"Dolf",
"Domeric", 
"Dongo",
"Donnel", 
"Dontos", 
"Doran", 
"Dorea", 
"Doreah",
"Dorna", 
"Dothraki", 
"Drennan",
"Drogo",
"Drogon",
"Drowned", 
"Drummer",
"Drunk", 
"Duncan", 
"Duncan", 
"Durran",
"Eaton",
"Echiel",
"Eddard", 
"Eddison", 
"Edmure", 
"Edmyn", 
"Edric", 
"Eglantine",
"Elaena", 
"Elboneno",
"Eldrick", 
"Elenei",
"Elia", 
"Elia", 
"Ellaria", 
"Elyo", 
"Emmon", 
"Endrew", 
"Eon", 
"Escan",
"Euron", 
"Falyse", 
"Farlen",
"Farmer",
"Fennesz",
"Florian",
"Freya", 
"Galbart", 
"Gared",
"Gareth", 
"Garlan", 
"Garth", 
"Gelmarr",
"Gendel",
"Gendry",
"Genna",
"Gerald",
"Gerold", 
"Gilly",
"Gordo",
"Gregor", 
"Greizhen", 
"Grenn",
"Grey", 
"Grey", 
"Grey", 
"Griffin", 
"Gunthor",
"Guymon",
"Gwayne", 
"Gyles", 
"Haggo",
"Halder",
"Hallyne",
"Harker",
"Harkon", 
"Harlen", 
"Harren", 
"Harrion", 
"Harys", 
"Heward",
"Hizdahr", 
"Hobb",
"Hodor",
"Horned", 
"Hoster", 
"Hot", 
"Hothor", 
"Howland", 
"Hugh",
"Illyrio", 
"Ilyn", 
"Imry", 
"Irri",
"Jack",
"Jack", 
"Jacks",
"Jaehaerys", 
"Jafer", 
"Jaime", 
"Janeya", 
"Janos", 
"Jaqen", 
"Jaremy", 
"Jaremy", 
"Jason", 
"Jasper", 
"Jeor", 
"Jeyne", 
"Jhaqo",
"Jhiqui",
"Joanna", 
"Joby",
"Joe",
"Joffrey", 
"Jojen", 
"Jon", 
"Jon", 
"Jon", 
"Jon", 
"Jon", 
"Jonos", 
"Jonquil",
"Jorah", 
"Joramun",
"Jory", 
"Joseth", 
"Joss",
"Joss", 
"Joyeuse", 
"Kaeth",
"Karl", 
"Karlon", 
"Kayla",
"Kegs",
"Kevan", 
"Keyr",
"Kovarro",
"Kraznys", 
"Kullback",
"Kurleket",
"Lancel", 
"Lann",
"Laurence", 
"Leaf",
"Leo", 
"Lhara",
"Loboda",
"Locke",
"Lollys", 
"Lommy",
"Loras", 
"Loren", 
"Loreza", 
"Lorren",
"Lothar", 
"Lothor", 
"Lowell",
"Lucan", 
"Luke",
"Luther",
"Luthor", 
"Luwin",
"Lyanna", 
"Lynesse", 
"Lyonel", 
"Lysa", 
"Mace", 
"Maege", 
"Maegor", 
"Maekar", 
"Mag", 
"Maggy",
"Mago",
"Malcolm",
"Malko",
"Malleon",
"Mance", 
"Mandon", 
"Mara", 
"Marei",
"Margaery", 
"Marianne", 
"Marillion",
"Marlin", 
"Marlon",
"Maron", 
"Maron", 
"Martyn", 
"Marya", 
"Masha", 
"Matthar",
"Matthos", 
"Meera", 
"Melessa", 
"Melisandre",
"Mern", 
"Mero",
"Merry", 
"Meryn", 
"Mhaegen",
"Mighdal",
"Mikken",
"Minisa", 
"Mink",
"Mirelle",
"Mirri", 
"Missandei",
"Monica", 
"Morag",
"Morag", 
"Mord",
"Mordane",
"Morgan",
"Morgan's friend",
"Mully",
"Mycah",
"Mycah", 
"Mychal", 
"Myk",
"Myranda",
"Myrcella", 
"Myriah", 
"Naerys", 
"Nelugo",
"Neyela", 
"Niko",
"Nissa", 
"Nymeria", 
"Obara", 
"Obella", 
"Oberyn", 
"Olenna", 
"Olly",
"Olyvar", 
"Orell",
"Orson", 
"Orys", 
"Osha",
"Oswell", 
"Othell", 
"Othor",
"Oznak", 
"Palla",
"Paxter", 
"Petyr", 
"Podrick", 
"Polliver",
"Pono",
"Portan",
"Prendahl", 
"Preston", 
"Pyat", 
"Pycelle",
"Pypar",
"Qhorin",
"Qotho",
"Quaithe",
"Quent",
"Qyburn",
"Rakharo",
"Ralf", 
"Ramsay", 
"Rancer",
"Randyll", 
"Rast",
"Rat", 
"Raymun", 
"Razdal", 
"Regan", 
"Reginald", 
"Renly", 
"Rennick",
"Rhaegal",
"Rhaegar", 
"Rhaegel", 
"Rhaego",
"Rhaella", 
"Rhaena", 
"Rhaenyra", 
"Rhaenys", 
"Rhaenys", 
"Rickard", 
"Rickard", 
"Rickon", 
"Riverlands", 
"Robar", 
"Robb", 
"Robert", 
"Robin", 
"Rodrik", 
"Ronnel", 
"Roose", 
"Rorge",
"Ros",
"Roslin", 
"Rossart",
"Ryger", 
"Rylene", 
"Salladhor", 
"Sally",
"Sam",
"Samwell", 
"Sandor", 
"Sansa", 
"Sarella", 
"Sarra", 
"Selwyn", 
"Selyse", 
"Ser", 
"Serena", 
"Serra", 
"Shae",
"Shagga",
"Sharra", 
"Shella", 
"Shiera", 
"Shireen", 
"Shirei", 
"Silk", 
"Simon", 
"Sissy",
"Smitty",
"Spice", 
"Stafford", 
"Stalwart", 
"Stannis", 
"Steffon", 
"Stevron", 
"Stiv",
"Stokeworth", 
"Stonesnake",
"Stygg",
"Styr",
"Syrio", 
"Talbot",
"Talisa", 
"Tansy",
"Temmo",
"Ternesio", 
"Terrence", 
"Theon", 
"Thoros",
"Timett",
"Tobho", 
"Tom",
"Tomard",
"Tommard", 
"Tommen", 
"Tommy",
"Tormund",
"Torrhen", 
"Tourney", 
"Tregar", 
"Trystane", 
"Tycho", 
"Tyene", 
"Tyrion", 
"Tysha",
"Tytos", 
"Tywin", 
"Ulf",
"Unella",
"Urzen",
"Vance", 
"Varamyr",
"Vardis", 
"Varly",
"Varys",
"Vaull",
"Vayon", 
"Vickon", 
"Victarion", 
"Viola", 
"Violet",
"Visenya", 
"Viserion",
"Viserys", 
"Volarik",
"Vorkoy",
"Walda", 
"Walder", 
"Waldra", 
"Waldron", 
"Wallen",
"Waymar", 
"Weasel",
"Wendel", 
"Wex",
"Will",
"Willas", 
"Willem", 
"Willis", 
"Wyl", 
"Wylla",
"Xaro", 
"Yara", 
"Yezzan", 
"Ygritte",
"Yohn", 
"Yoren",
"Zalla"]        