const reine = require('../src/reine')

describe('Reine Test',()=>{
    test('Army minus 1', ()=>{
        expect(reine(["reine","pot"],[3,1])).toBe(-1)
    })

    test('Army minus 1', ()=>{
        expect(reine(["reine","pot","pot"],[3,1,1])).toBe(-2)
    })
 
    test('Army minus 3', ()=>{
        expect(reine(["reine","mortier"],[3,3])).toBe(-3)
    })

    // le cas ou le plus petit est plus grand que la force de la reine
    test('Army minus 5', ()=>{
        expect(reine(["reine","mortier"],[3,5])).toBe(-5)
    })
})
