
const livre = require('./livre')
const reine = require('./reine')
const mortier = require('./mortier')

/**
 * test each 
 * expect.arrayConntaining
 * before 
 */
const DICE_TYPE = {
    'reine' : 3, 
    'ble' : 2, 
    'pot' : 1, 
    'livre' : (army) => { return livre(army)}, 
    'mortier' :(armyAdv) => { return mortier(armyAdv)}, 
    'maudit' : -1, 
}


function calcSizeArmy(army,armyAdv = []) {
    if(army.length > 7){
        throw new Error('Out of range, try again Billy !!!')
    }
    let powaaaa = 0
    const armyActual = army
    const armyListPowa = []
    army.map((pawns) => {
        if(typeof pawns  !== 'string'){
            throw new Error('he must be a Array of string, try again Billy !!!')
        }
        let modifier = 0
       if (pawns === 'livre'){
           modifier = DICE_TYPE.livre(armyActual)
        }else if (pawns === 'mortier'){
            modifier = DICE_TYPE.mortier(armyAdv)
         }else{
            modifier = DICE_TYPE[pawns]
        }
        powaaaa += modifier
        armyListPowa.push(modifier)
    })
    if(army.find((paws) => { return paws === 'reine'})){
        const sanction = reine(army,armyListPowa)
    }
   
    return powaaaa
}

module.exports = calcSizeArmy    
