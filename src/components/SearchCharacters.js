import React, { Component } from 'react';

class SearchCharacters extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Ex: Noobslayer',
            realm: 'None'
        }
    };

    onTextChange(name) {
        this.setState({ name });
        console.log(this.state.name);
    }
    onOptionChange(realm) {
        this.setState({ realm });
        console.log(this.state.realm);
    }
    onSubmitForm = (event) => {
        event.preventDefault();
        const realm = this.state.realm;
        const name = this.state.name;
        this.props.onSearch(realm, name);
    }

    render() {
    return (
        <div>
            <h3>Enter Character Name:</h3>
                <form onSubmit={this.onSubmitForm}>
                    <input 
                    type="text" 
                    placeholder={this.state.name}
                    value={this.state.name}
                    onChange={event => this.onTextChange(event.target.value)}
                    />
                    Select Realm:
                        <select onChange = {event => this.onOptionChange(event.target.value)}>
                            <option value="Aegwynn">Aegwynn</option>
                            <option value="Aerie%20Peak">Aerie Peak</option>
                            <option value="Agamaggan">Agamaggan</option>
                            <option value="Aggramar">Aggramar</option>
                            <option value="Akama">Akama</option>
                            <option value="Alexstrasza">Alexstrasza</option>
                            <option value="Alleria">Alleria</option>
                            <option value="Altar%20of%20Storms">Altar of Storms</option>
                            <option value="Alterac%20Mountains">Alterac Mountains</option>
                            <option value="Andorhal">Andorhal</option>
                            <option value="Anetheron">Anetheron</option>
                            <option value="Antonidas">Antonidas</option>
                            <option value="Anub'arak">Anub'arak</option>
                            <option value="Anvilmar">Anvilmar</option>
                            <option value="Arathor">Arathor</option>
                            <option value="Archimonde">Archimonde</option>
                            <option value="Area%2052">Area 52</option>
                            <option value="Argent%20Dawn">Argent Dawn</option>
                            <option value="Arthas">Arthas</option>
                            <option value="Arygos">Arygos</option>
                            <option value="Auchindoun">Auchindoun</option>
                            <option value="Azgalor">Azgalor</option>
                            <option value="Azjol-Nerub">Azjol-Nerub</option>
                            <option value="Azshara">Azshara</option>
                            <option value="Azuremyst">Azuremyst</option>
                            <option value="Baelgun">Baelgun</option>
                            <option value="Balnazzar">Balnazzar</option>
                            <option value="Barthilas">Barthilas</option>
                            <option value="Black%20Dragonflight">Black Dragonflight</option>
                            <option value="Blackhand">Blackhand</option>
                            <option value="Blackrock">Blackrock</option>
                            <option value="Blackwater%20Raiders">Blackwater Raiders</option>
                            <option value="Blackwing%20Lair">Blackwing Lair</option>
                            <option value="Blade's%20Edge">Blade's Edge</option>
                            <option value="Bladefist">Bladefist</option>
                            <option value="Bleeding%20Hollow">Bleeding Hollow</option>
                            <option value="Blood%20Furnace">Blood Furnace</option>
                            <option value="Bloodhoof">Bloodhoof</option>
                            <option value="Bloodscalp">Bloodscalp</option>
                            <option value="Bonechewer">Bonechewer</option>
                            <option value="Borean%20Tundra">Borean Tundra</option>
                            <option value="Boulderfist">Boulderfist</option>
                            <option value="Bronzebeard">Bronzebeard</option>
                            <option value="Burning%20Blade">Burning Blade</option>
                            <option value="Burning%20Legion">Burning Legion</option>
                            <option value="Caelestrasz">Caelestrasz</option>
                            <option value="Cairne">Cairne</option>
                            <option value="Cenarion%20Circle">Cenarion Circle</option>
                            <option value="Cenarius">Cenarius</option>
                            <option value="Cho'gall">Cho'gall</option>
                            <option value="Chromaggus">Chromaggus</option>
                            <option value="Coilfang">Coilfang</option>
                            <option value="Crushridge">Crushridge</option>
                            <option value="Daggerspine">Daggerspine</option>
                            <option value="Dalaran">Dalaran</option>
                            <option value="Dalvengyr">Dalvengyr</option>
                            <option value="Dark%20Iron">Dark Iron</option>
                            <option value="Darkspear">Darkspear</option>
                            <option value="Darrowmere">Darrowmere</option>
                            <option value="Dath'Remar">Dath'Remar</option>
                            <option value="Dawnbringer">Dawnbringer</option>
                            <option value="Deathwing">Deathwing</option>
                            <option value="Demon%20Soul">Demon Soul</option>
                            <option value="Dentarg">Dentarg</option>
                            <option value="Destromath">Destromath</option>
                            <option value="Dethecus">Dethecus</option>
                            <option value="Detheroc">Detheroc</option>
                            <option value="Doomhammer">Doomhammer</option>
                            <option value="Draenor">Draenor</option>
                            <option value="Dragonblight">Dragonblight</option>
                            <option value="Dragonmaw">Dragonmaw</option>
                            <option value="Drak'Tharon">Drak'Tharon</option>
                            <option value="Drak'thul">Drak'thul</option>
                            <option value="Draka">Draka</option>
                            <option value="Dreadmaul">Dreadmaul</option>
                            <option value="Drenden">Drenden</option>
                            <option value="Dunemaul">Dunemaul</option>
                            <option value="Durotan">Durotan</option>
                            <option value="Duskwood">Duskwood</option>
                            <option value="Earthen%20Ring">Earthen Ring</option>
                            <option value="Echo%20Isles">Echo Isles</option>
                            <option value="Eitrigg">Eitrigg</option>
                            <option value="Eldre'Thalas">Eldre'Thalas</option>
                            <option value="Elune">Elune</option>
                            <option value="Emerald%20Dream">Emerald Dream</option>
                            <option value="Eonar">Eonar</option>
                            <option value="Eredar">Eredar</option>
                            <option value="Executus">Executus</option>
                            <option value="Exodar">Exodar</option>
                            <option value="Farstriders">Farstriders</option>
                            <option value="Feathermoon">Feathermoon</option>
                            <option value="Fenris">Fenris</option>
                            <option value="Firetree">Firetree</option>
                            <option value="Fizzcrank">Fizzcrank</option>
                            <option value="Frostmane">Frostmane</option>
                            <option value="Frostmourne">Frostmourne</option>
                            <option value="Frostwolf">Frostwolf</option>
                            <option value="Galakrond">Galakrond</option>
                            <option value="Garithos">Garithos</option>
                            <option value="Garona">Garona</option>
                            <option value="Garrosh">Garrosh</option>
                            <option value="Ghostlands">Ghostlands</option>
                            <option value="Gilneas">Gilneas</option>
                            <option value="Gnomeregan">Gnomeregan</option>
                            <option value="Gorefiend">Gorefiend</option>
                            <option value="Gorgonnash">Gorgonnash</option>
                            <option value="Greymane">Greymane</option>
                            <option value="Grizzly%20Hills">Grizzly Hills</option>
                            <option value="Gul'dan">Gul'dan</option>
                            <option value="Gundrak">Gundrak</option>
                            <option value="Gurubashi">Gurubashi</option>
                            <option value="Hakkar">Hakkar</option>
                            <option value="Haomarush">Haomarush</option>
                            <option value="Hellscream">Hellscream</option>
                            <option value="Hydraxis">Hydraxis</option>
                            <option value="Hyjal">Hyjal</option>
                            <option value="Icecrown">Icecrown</option>
                            <option value="Illidan">Illidan</option>
                            <option value="Jaedenar">Jaedenar</option>
                            <option value="Jubei'Thos">Jubei'Thos</option>
                            <option value="Kael'thas">Kael'thas</option>
                            <option value="Kalecgos">Kalecgos</option>
                            <option value="Kargath">Kargath</option>
                            <option value="Kel'Thuzad">Kel'Thuzad</option>
                            <option value="Khadgar">Khadgar</option>
                            <option value="Khaz%20Modan">Khaz Modan</option>
                            <option value="Khaz'goroth">Khaz'goroth</option>
                            <option value="Kil'jaeden">Kil'jaeden</option>
                            <option value="Kilrogg">Kilrogg</option>
                            <option value="Kirin%20Tor">Kirin Tor</option>
                            <option value="Korgath">Korgath</option>
                            <option value="Korialstrasz">Korialstrasz</option>
                            <option value="Kul%20Tiras">Kul Tiras</option>
                            <option value="Laughing%20Skull">Laughing Skull</option>
                            <option value="Lethon">Lethon</option>
                            <option value="Lightbringer">Lightbringer</option>
                            <option value="Lightning's%20Blade">Lightning's Blade</option>
                            <option value="Lightninghoof">Lightninghoof</option>
                            <option value="Llane">Llane</option>
                            <option value="Lothar">Lothar</option>
                            <option value="Madoran">Madoran</option>
                            <option value="Maelstrom">Maelstrom</option>
                            <option value="Magtheridon">Magtheridon</option>
                            <option value="Maiev">Maiev</option>
                            <option value="Mal'Ganis">Mal'Ganis</option>
                            <option value="Malfurion">Malfurion</option>
                            <option value="Malorne">Malorne</option>
                            <option value="Malygos">Malygos</option>
                            <option value="Mannoroth">Mannoroth</option>
                            <option value="Medivh">Medivh</option>
                            <option value="Misha">Misha</option>
                            <option value="Mok'Nathal">Mok'Nathal</option>
                            <option value="Moon%20Guard">Moon Guard</option>
                            <option value="Moonrunner">Moonrunner</option>
                            <option value="Mug'thol">Mug'thol</option>
                            <option value="Muradin">Muradin</option>
                            <option value="Nagrand">Nagrand</option>
                            <option value="Nathrezim">Nathrezim</option>
                            <option value="Nazgrel">Nazgrel</option>
                            <option value="Nazjatar">Nazjatar</option>
                            <option value="Ner'zhul">Ner'zhul</option>
                            <option value="Nesingwary">Nesingwary</option>
                            <option value="Nordrassil">Nordrassil</option>
                            <option value="Norgannon">Norgannon</option>
                            <option value="Onyxia">Onyxia</option>
                            <option value="Perenolde">Perenolde</option>
                            <option value="Proudmoore">Proudmoore</option>
                            <option value="Quel'dorei">Quel'dorei</option>
                            <option value="Ravencrest">Ravencrest</option>
                            <option value="Ravenholdt">Ravenholdt</option>
                            <option value="Rexxar">Rexxar</option>
                            <option value="Rivendare">Rivendare</option>
                            <option value="Runetotem">Runetotem</option>
                            <option value="Sargeras">Sargeras</option>
                            <option value="Saurfang">Saurfang</option>
                            <option value="Scarlet%20Crusade">Scarlet Crusade</option>
                            <option value="Scilla">Scilla</option>
                            <option value="Sen'jin">Sen'jin</option>
                            <option value="Sentinels">Sentinels</option>
                            <option value="Shadow%20Council">Shadow Council</option>
                            <option value="Shadowmoon">Shadowmoon</option>
                            <option value="Shadowsong">Shadowsong</option>
                            <option value="Shandris">Shandris</option>
                            <option value="Shattered%20Halls">Shattered Halls</option>
                            <option value="Shattered%20Hand">Shattered Hand</option>
                            <option value="Shu'halo">Shu'halo</option>
                            <option value="Silver%20Hand">Silver Hand</option>
                            <option value="Silvermoon">Silvermoon</option>
                            <option value="Sisters%20of%20Elune">Sisters of Elune</option>
                            <option value="Skullcrusher">Skullcrusher</option>
                            <option value="Skywall">Skywall</option>
                            <option value="Smolderthorn">Smolderthorn</option>
                            <option value="Spinebreaker">Spinebreaker</option>
                            <option value="Spirestone">Spirestone</option>
                            <option value="Staghelm">Staghelm</option>
                            <option value="Steamwheedle%20Cartel">Steamwheedle Cartel</option>
                            <option value="Stonemaul">Stonemaul</option>
                            <option value="Stormrage">Stormrage</option>
                            <option value="Stormreaver">Stormreaver</option>
                            <option value="Stormscale">Stormscale</option>
                            <option value="Suramar">Suramar</option>
                            <option value="Tanaris">Tanaris</option>
                            <option value="Terenas">Terenas</option>
                            <option value="Terokkar">Terokkar</option>
                            <option value="Thaurissan">Thaurissan</option>
                            <option value="The%20Forgotten%20Coast">The Forgotten Coast</option>
                            <option value="The%20Scryers">The Scryers</option>
                            <option value="The%20Underbog">The Underbog</option>
                            <option value="The%20Venture%20Co">The Venture Co</option>
                            <option value="Thorium%20Brotherhood">Thorium Brotherhood</option>
                            <option value="Thrall">Thrall</option>
                            <option value="Thunderhorn">Thunderhorn</option>
                            <option value="Thunderlord">Thunderlord</option>
                            <option value="Tichondrius">Tichondrius</option>
                            <option value="Tortheldrin">Tortheldrin</option>
                            <option value="Trollbane">Trollbane</option>
                            <option value="Turalyon">Turalyon</option>
                            <option value="Twisting%20Nether">Twisting Nether</option>
                            <option value="Uldaman">Uldaman</option>
                            <option value="Uldum">Uldum</option>
                            <option value="Undermine">Undermine</option>
                            <option value="Ursin">Ursin</option>
                            <option value="Uther">Uther</option>
                            <option value="Vashj">Vashj</option>
                            <option value="Vek'nilash">Vek'nilash</option>
                            <option value="Velen">Velen</option>
                            <option value="Warsong">Warsong</option>
                            <option value="Whisperwind">Whisperwind</option>
                            <option value="Wildhammer">Wildhammer</option>
                            <option value="Windrunner">Windrunner</option>
                            <option value="Winterhoof">Winterhoof</option>
                            <option value="Wyrmrest%20Accord">Wyrmrest Accord</option>
                            <option value="Ysera">Ysera</option>
                            <option value="Ysondre">Ysondre</option>
                            <option value="Zangarmarsh">Zangarmarsh</option>
                            <option value="Zul'jin">Zul'jin</option>
                            <option value="Zuluhed">Zuluhed</option>
                        </select>
                    <input type="submit" />
                </form>
        </div>
    );
}
}

export default SearchCharacters;
