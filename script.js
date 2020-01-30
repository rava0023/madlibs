// LITTLE RED RINDING HOOD
//PART 1

let littleRed={
    color:'yellow',
    pluralnoun:['mobiles','laptops','fans','cameras'],
    adjective:'cute',
    exclamation:'great',
    sillyword:'preposterous',
    verb:['took','take','cut']
}


console.log(`One day, Little ${littleRed.color} Riding Hood was going through the forest carrying a 
basket of ${littleRed.pluralnoun[0]} for her grandmother. Suddenly, she met a big 
${littleRed.adjective} wolf.

"${littleRed.exclamation}" said the wolf. "Where are you going little ${littleRed.sillyword}?"

"I'm going to my grandmother's house," she said. Then the wolf 
${littleRed.verb[0]} away.

When Miss Riding Hood got to her grandmother's house, the wolf was in bed 
dressed like her grandmother.

"My, Grandmother," she said. "What big ${littleRed.pluralnoun[1]} you have."

"The better to ${littleRed.verb[1]} you with," said the wolf.

"And, Grandmother," she said, "what big ${littleRed.pluralnoun[2]}" you have."

The wolf said, "The better to ${littleRed.verb[2]} you with."

And then she said, "What big ${littleRed.pluralnoun[3]}" you have, Grandmother." But 
the wolf said nothing. He had just died of indigestion from eating Grandmother`)


// LITTLE RED RINDING HOOD
//PART 2


littleRed.color='orange'
littleRed.pluralnoun.splice(2,1,'balloons')
littleRed.exclamation='oo great'
littleRed.verb.splice(1,1,'give')

console.log(`One day, Little ${littleRed.color} Riding Hood was going through the forest carrying a 
basket of ${littleRed.pluralnoun[0]}  for her grandmother. Suddenly, she met a big 
${littleRed.adjective} wolf.

"${littleRed.exclamation}" said the wolf. "Where are you going little ${littleRed.sillyword}?"

"I'm going to my grandmother's house," she said. Then the wolf 
${littleRed.verb[0]} away.

When Miss Riding Hood got to her grandmother's house, the wolf was in bed 
dressed like her grandmother.

"My, Grandmother," she said. "What big ${littleRed.pluralnoun[1]} you have."

"The better to ${littleRed.verb[1]} you with," said the wolf.

"And, Grandmother," she said, "what big ${littleRed.pluralnoun[2]}" you have."

The wolf said, "The better to ${littleRed.verb[2]} you with."

And then she said, "What big ${littleRed.pluralnoun[3]}" you have, Grandmother." But 
the wolf said nothing. He had just died of indigestion from eating Grandmother`)


//SNOW WHITE
//PART 1


let snowWhite = {
    pluralnoun:['bottles','dogs'],
    number : 9,
    adjective : ['Freezing','bumpy','chilly','soft'],
    noun : ['month','book','child','country','fact'],
    color:'green',
    PartOf_ABody:'hands',
    adverb:'often'

}

console.log(`One of the most popular fairy ${snowWhite.pluralnoun[0]} of all time is Snow White and the 
${snowWhite.number} ${snowWhite.pluralnoun[1]}.

Snow White is a princess whose${snowWhite.adjective[0]} beauty threatens her stepmother, 
the queen. Snow White is forced to flee from the${snowWhite.noun[0]} in which she lives 
and hide in a nearby ${snowWhite.noun[1]}.

Once there, she is discovered by ${snowWhite.adjective[1]} animals who guide her to the 
${snowWhite.adjective[2]} cottage of the seven dwarfs. The dwarfs take care of her until 
the prince, who has traveled the four corners of the ${snowWhite.noun[2]} in search of 
Snow ${snowWhite.color}, arrives and gives her a magical ${snowWhite.noun[3]} on her 
${snowWhite.PartOf_ABody}, which miraculously bring her back to life after she eats 
a poisonous ${snowWhite.noun[4]}. Snow White and the prince live ${snowWhite.adverb} ever after.`)


//SNOW WHITE
//PART 2


snowWhite.number = 10
snowWhite.adjective.splice(0,1,'adorable')
snowWhite.noun.splice(1,1,'london')
snowWhite.noun.splice(3,1,'germany')


console.log(`One of the most popular fairy ${snowWhite.pluralnoun[0]} of all time is Snow White and the 
${snowWhite.number} ${snowWhite.pluralnoun[1]}.

Snow White is a princess whose ${snowWhite.adjective[0]} beauty threatens her stepmother, 
the queen. Snow White is forced to flee from the ${snowWhite.noun[0]} in which she lives 
and hide in a nearby ${snowWhite.noun[1]}.

Once there, she is discovered by ${snowWhite.adjective[1]} animals who guide her to the 
${snowWhite.adjective[2]} cottage of the seven dwarfs. The dwarfs take care of her until 
the prince, who has traveled the four corners of the ${snowWhite.noun[2]} in search of 
Snow ${snowWhite.color}, arrives and gives her a magical ${snowWhite.noun[3]} on her 
${snowWhite.PartOf_ABody}, which miraculously bring her back to life after she eats 
a poisonous ${snowWhite.noun[4]}. Snow White and the prince live ${snowWhite.adverb} ever after.`)


