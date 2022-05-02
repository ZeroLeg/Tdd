const text = "hola mundo";


test('Debe contener un texto', () => {
    expect(text).toMatch(/mundo/);
});