const text = "hola mundo";
const fruits = ['manzana', 'melon', 'banana'];

test('Debe contener un texto', () => {
    expect(text).toMatch(/mundo/);
});

test('Tenemos una banana', ()=> {
    expect(fruits).toContain('banana');
});

test('Mayor que', ()=> {
    expect(9).toBeGreaterThan(2);
});

test('Es verdadadero', () => {
    expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
};

test('probar callback', () => {
    reverseString('Hola', (str) => {
        expect(str).toBe('aloH');
    })
});