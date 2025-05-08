const fromEuroToDollar = (euro) => euro * 1.07;
const fromDollarToYen = (dollar) => dollar * 146.26;
const fromYenToPound = (yen) => yen * 0.0056;

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };




let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}