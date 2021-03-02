const City = require('../src/Models/City');
test('City create model', () => {
    let city_data = {
        id:1,
        city:'Newark',
        city_ascii:'Newark',
        lat:10,
        lng:10,
        country:'US',
        iso2:'NW',
        iso3:'NEW',
        admin_name:'Newark',
        capital:'Capital',
        population: '100000'
    };
    let result = City.create(city_data);
    expect(result).toBeInstanceOf(City);
    expect(result.id).toBe(1);
    expect(result.city).toBe('Newark');
    expect(result.city_ascii).toBe('Newark');
    expect(result.lat).toBe(10);
    expect(result.lng).toBe(10);
    expect(result.iso2).toBe('NW');
    expect(result.iso3).toBe('NEW');
    expect(result.admin_name).toBe('Newark');
    expect(result.capital).toBe('Capital');
});
