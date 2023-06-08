function reine(army,armyPowa){
    
    let weakling = armyPowa[0]
    for (let index = 1; index < armyPowa.length; index++) {
        const element = armyPowa[index];
        if(element<weakling){
            weakling = element
        }
    }

    let nbWeakling = armyPowa.filter((value)=>{return weakling === value}).length
    if(weakling === 3){
        nbWeakling -= army.filter((value)=>{return value==='reine'}).length
    }
    return nbWeakling * -weakling
}

module.exports = reine