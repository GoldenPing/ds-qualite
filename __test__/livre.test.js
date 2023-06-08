const livre = require('../src/livre')

describe('Livre Test', ()=>{
    test('Doit être paire',()=>{
        expect(livre(new Array(1).fill('livre'))).toBe(1)
    })

    test('Doit être imPaire',()=>{
        expect(livre(new Array(2).fill('livre'))).toBe(2)
    })
})