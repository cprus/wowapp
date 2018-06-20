import React from 'react';

const CharacterInfo = ({ character }) => {
    function whichRace(number) {
        switch (number) {
            case 1:
            return "Troll";

            case 2:
            return "Orc";

            case 3:
            return "Dwarf";

            case 4:
            return "Nightelf";

            case 5:
            return "Undead";

            case 6:
            return "Tauren";
            
            case 7:
            return "Gnome";

            case 8:
            return "Troll";

            case 9:
            return "Goblin";

            case 10:
            return "Blood Elf";

            case 11:
            return "Draenei";

            case 22:
            return "Worgen";

            case 24:
            return "Pandaren";

            case 25:
            return "Pandaren";

            case 26:
            return "Pandaren";

            case 27:
            return "Nightborne";

            case 28:
            return "Highmountain Tauren";

            case 29:
            return "Void Elf";

            case 30:
            return "Lightforged Draenei"

            default:
            return "None";
        }
    }; 

    function whichClass(number) {
        switch(number) {
            case 1:
            return "Warrior";

            case 2:
            return "Paladin";

            case 3:
            return "Hunter";

            case 4:
            return "Rogue";

            case 5:
            return "Priest";

            case 6:
            return "Death Knight";

            case 7:
            return "Shaman";

            case 8:
            return "Mage";

            case 9:
            return "Warlock";

            case 10:
            return "Monk";

            case 11:
            return "Druid";

            case 12:
            return "Demon Hunter";

            default:
            return "None";
        }
    }
    
     if (character.length === 0) {
         return null;
     }

    return (
        <div>
            <h3>Name: {character.name}</h3>
            <p>Level {character.level} {whichRace(character.race)} {whichClass(character.class)}</p>
        </div>
        
    )


   
};

export default CharacterInfo;