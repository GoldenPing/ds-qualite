const calcSizeArmy = require('./calcSizeArmy')

function getAllDiceCombinations(dices) {
    const toCombine = new Array(dices.length).fill("").map((_, i) => i);
    let combinations = [];
    let temp = [];
    let slent = Math.pow(2, toCombine.length) - 1;
    
    for (let i = 0; i < slent / 2; i++) {
    temp = [];
    for (var j = 0; j < toCombine.length; j++) {
    if (i & Math.pow(2, j)) {
    temp.push(toCombine[j]);
    }
    }
    
    if (temp.length > 0) {
    combinations.push(temp);
    }
    }
    
    return combinations.map((combi) => {
    const completion = toCombine.filter((index) => combi.indexOf(index) === -1);
    const diceCombi = combi.map((e) => dices[e]);
    const diceCompletion = completion.map((e) => dices[e]);
    return [diceCombi, diceCompletion];
    })
   }

function game(dices) {
    console.log(dices);
    if(dices.length > 7){
        throw new Error('Out of range, try again Billy !!!')
    }
    dices.map((pawns) => {
        if(typeof pawns  !== 'string'){
            throw new Error('he must be a Array of string, try again Billy !!!')
        }})

    const allValidCombi = getAllDiceCombinations(dices).find((value) => {return calcSizeArmy(value[0],value[1]) === calcSizeArmy(value[1],value[0])})
    return allValidCombi
}

module.exports = game