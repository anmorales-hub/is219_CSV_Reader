const City = require('../src/Models/City');
const CSVReader = require("../src/Index.js");

test('CSVReader creates output', () => {
    let result = CSVReader.Read('data/WorldCities.csv', City);
    expect(result).toBeInstanceOf(Array);
});
test('CSVReader creates proper length list', () => {
    let result = CSVReader.Read('data/WorldCities.csv', City);
    expect(result).toHaveLength(6);
});
test('CSVReader correct output model type', () => {
    let result = CSVReader.Read('data/WorldCities.csv', City);
    result.forEach(function (data) {
        expect(data).toBeInstanceOf(City);
    })
});
