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

const reverseString2 = str => {
    return new Promise( (resolve, reject )=> {
        if(!str)
            reject(Error("Error"))

        resolve(str.split("").reverse().join(""))
    })
}

test('provar promesa', () => {
    return reverseString2('Hola')
                .then(string => {
                    expect(string).toBe('aloH')
                })
});

test('test async / await', async () => {
    const string = await reverseString2('hola');
    expect(string).toBe('aloh');
});

afterEach(() => {
    console.log("DEspues de cada prueba");
});
beforeEach(() => {
    console.log('Antes de cada prueba');
});

beforeAll(() => {
    console.log("Antes de todas las pruebas");
});