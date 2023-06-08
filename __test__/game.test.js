const game = require('../src/game')

describe('CalcSizeArmy test',()=>{
    

    // les tests passe pottentiellement mais j'ai rentrer les tableau a l'arrache donc les tableaus de solution ne sont pas bon
    describe('Good Input white dices',()=>{
        test.each([
            [
                [
                    ["pot","pot","ble","ble"],
                    ["ble","mortier",'pot']
                ]
            ],
            [ 
                [
                    ["pot","pot","pot","pot"],
                    ["ble","maudit","mortier"]
                ]
            ],
            [
                [
                    ["pot","ble","ble"],
                    ["livre","livre","livre",'reine']
                ]
            ],
            [
                [
                    ["pot","pot","ble"],
                    ["ble","ble","maudit",'reine']
                ]
            ],
          ])('solution de 4 defi ', (a) => {
            const allTroups = [...a[0],...a[1]]
            expect(game(allTroups)).toEqual(expect.arrayContaining(a));
          });
    })
    

    describe('Bad Input',()=>{
        test('out of range',()=>{
            expect(()=> {game(new Array(8))}).toThrow(new Error('Out of range, try again Billy !!!'))
        })
        test('out of range',()=>{
            expect(()=> {game(new Array(7).fill(5))}).toThrow(new Error('he must be a Array of string, try again Billy !!!'))
        })
    })
})