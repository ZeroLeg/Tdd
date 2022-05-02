const randomString = require('../index');


describe('Probar funcionalidad randomstring', () => {
    test('Probar funcionalidad', () => {
        expect( typeof(randomString())).toBe('string');
    });

    test('Comprobar que no existe una ciudad', () => {
        expect(randomString()).not.toMatch(/Cordoba/);
    });
});