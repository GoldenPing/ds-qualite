const calcSizeArmy = require('../src/calcSizeArmy')

describe('CalcSizeArmy test',()=>{
    
    describe('Good Input', () =>{
        describe('One dice',()=>{

            test('Normal issue a army of 1 pot', ()=>{
                expect(calcSizeArmy(new Array(1).fill('pot'))).toBe(1);
            })
    
            test('Normal issue a army of 1 ble', ()=>{
                expect(calcSizeArmy(new Array(1).fill('ble'))).toBe(2);
            })

            test('Normal issue a army of 1 maudit', ()=>{
                const arr = new Array(1).fill('maudit')
                expect(calcSizeArmy(arr)).toBe(-1);
            })
        })

        describe('Two dice',()=>{
            test('Normal issue a army of 1 pot and 1 maudit', ()=>{
                const arr = ['pot', 'maudit']
                expect(calcSizeArmy(arr)).toBe(0);
            })

            test('Normal issue a army of 1 ble and 1 maudit', ()=>{
                const arr = ['ble', 'maudit']
                expect(calcSizeArmy(arr)).toBe(1);
            })

            test('Normal issue a army of 1 ble and 1 pot', ()=>{
                const arr = ['ble', 'pot']
                expect(calcSizeArmy(arr)).toBe(3);
            })
    
        })

        describe('Two army',()=>{
            test('Army without mortier',()=>{
                const arrA = ['ble', 'pot']
                const arrB = ['pot', 'maudit']
                expect(calcSizeArmy(arrA,arrB)).toBe(3);
            })


            test('Army with mortier',()=>{
                const arrA = ['mortier', 'pot']
                const arrB = ['pot']
                expect(calcSizeArmy(arrA,arrB)).toBe(2);
            })
        })
    })





    describe('Bad Input',()=>{
        test('out of range',()=>{
            expect(()=> {calcSizeArmy(new Array(8))}).toThrow(new Error('Out of range, try again Billy !!!'))
        })
        test('out of range',()=>{
            expect(()=> {calcSizeArmy(new Array(7).fill(5))}).toThrow(new Error('he must be a Array of string, try again Billy !!!'))
        })
    })
})