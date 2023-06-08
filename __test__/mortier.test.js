const mortier = require('../src/mortier')


describe('Mortier Test', ()=>{
    test('advArmy size = 1',()=>{
        expect(mortier(new Array(1).fill('livre'))).toBe(1)
    })

    test('advArmy size = 2 ',()=>{
        expect(mortier(new Array(2).fill('livre'))).toBe(2)
    })

    test('advArmy size = x ',()=>{
        const x = 3147813
        expect(mortier(new Array(x).fill('livre'))).toBe(x)
    })
})