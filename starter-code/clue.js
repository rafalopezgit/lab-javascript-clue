/*

---- Characters ----

  Mr Green
  first name: Jacob
  last name:  Green
  color: green
  description: He has a lot of connections
  age: 45
  image: https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
  occupation: Entrepreneur

  Dr Orchid
  first name: Doctor
  last name: Orchid
  color: white
  description: PhD in plant toxicology. Adopted daughter of Mr. Boddy
  age: 26
  image: http://www.radiotimes.com/uploads/images/Original/111967.jpg
  occupation: Scientist

  Prof Plum
  first name: Victor
  last name: Plum
  color: purple
  description: Billionare video game designer
  age: 22
  image: https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
  occupation: Designer

  Miss Scarlet
  first name: Kasandra
  last name: Scarlet
  color: red
  description: She is an A-list movie star with a dark past,
  age: 31,
  image: https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg,
  occupation: Actor

 Mrs Peacock
  first name: Eleanor
  last name: Peacock
  color: blue
  description: She is from a wealthy family and uses her status and money to earn popularity
  age: 36
  image: https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
  occupation: Socialité

 Mr Mustard
  first name: Jack
  last name: Mustard
  color: yellow
  description: He is a former football player who tries to get by on his former glory
  age: 62
  image: https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
  occupation: Retired Football player

---- Weapons ----

Rope - Weight: 10
Knife - Weight: 8
Candlestick - Weight: 2
Dumbbell - Weight: 30
Poison - Weight: 2
Axe - Weight: 15
Bat - Weight: 13
Trophy - Weight: 25
Pistol - Weight: 20


---- Rooms ----
Dinning Room
Conservatory
Kitchen
Study
Library
Billiard Room
Lounge
Ballroom
Hall
Spa
Living Room
Observatory
Theater
Guest House
Patio

*/

var suspects = [
  [{ nameSuspect: "Mr Green",
    firstName: "Jacob",
    lastName: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
  }],

  [{ nameSuspect: "Dr Orchid",
    firstName: "Doctor",
    lastName: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26, image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist"
  }],

  [{
    nameSuspect: "Prof Plum",
    firstName: "Victor",
    lastName: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image:"https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
  }],

  [{
  nameSuspect: "Miss Scarlet",
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
  }],

  [{
  nameSuspect: "Mrs Peacock",
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
  }],

[{
  nameSuspect: "Mr Mustard",
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
}]
];


// var objectWeapons {}

var weapons = [
{ name: "rope", weight:10 },
{ name: "Knife", weight: 8 },
{ name: "Candlestick", weight: 2 },
{ name: "Dumbbell", weight: 30 },
{ name: "Poison", weight: 2 },
{ name: "Axe", weight: 15 },
{ name: "Bat", weight: 13 },
{ name: "Trophy", weight: 25 },
{ name: "Pistol", weight: 20 },
];

// var objectCards {}
var rooms = [
{ name: "Dinning Room"},
{ name: "Conservatory"},
{ name: "Kitchen"},
{ name: "Study"},
{ name: "Library"},
{ name: "Billiard Room"},
{ name: "Lounge"},
{ name: "Ballroom"},
{ name: "Hall"},
{ name: "Spa"},
{ name: "Living Room"},
{ name: "Observatory"},
{ name: "Theater"},
{ name: "Guest House"},
{ name: "Patio"},
];


function random_selector(array) {
  var randomCard = array[Math.floor(array.length * Math.random())];
  return randomCard
}

function pick_mistery(){
  return [random_selector(suspects), random_selector(weapons), random_selector(rooms)];
}
//En la línea 197, Me gustaría que me devuelva las claves: nameSuspect, name y name de cada carta. ¿Cómo podría hacerlo?

function reveal_mistery(mistery) {
  return mistery;
}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
