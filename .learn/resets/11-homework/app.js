// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {

    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;

    // return the dollar value
    return valueInDollar;
}
module.exports = {sum, fromEuroToDollar};


const fromDollarToYen = function(valueInDollar) {
    
    let valueInYen = valueInDollar * 156.5;

    return valueInYen
}
module.exports = {sum, fromDollarToYen};


const fromYenToPound = function(valueInYen) {

    // Convert the given valueInEuro to dollars
    let valueInPound = valueInYen * 0.87;

    // return the dollar value
    return valueInPound;
}

module.exports = {sum, fromYenToPound};

const sum = (a,b) => {
    return a+b
}
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}