const {sum, fromYenToPound} = require('./app.js');


test("One euro should be 1.07 dollars", function() {
   
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07; 
    
     expect(dollars).toBeCloseTo(expected); 
     
});


test ("one dollar should be 146.26 yen", function () {

    const {fromDollarToYen} = require('./app.js');

    const yen = fromDollarToYen(3.5);

    const expected = 3.5 * 146.26;

    expect(yen).toBeCloseTo(expected)

});


test ("one yen should be 0.0056 pound", function () {
    
    const {fromYenToPound} = require('./app.js');

    const pound = fromYenToPound (3.5);

    const expected = 3.5 * 0.0056;

    expect(pound).toBeCloseTo(expected)
});
