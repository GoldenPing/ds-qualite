function traitre(army) {
    const nbHero =  army.filter((value)=>{return value === 'hero'}).length
    const traitre =  army.filter((value)=>{return value === 'traitre'}).length
    if( nbHero > 0) {
        return -2
    }
    return 1 
}

module.exports = traitre    
