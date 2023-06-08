function mage(army){
    return army.filter((value)=>{return value !== 'mage'}).length
}

module.exports = mage    
