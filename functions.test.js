const functions = require('./ejercicio');

//test exponencial

describe("exponencial", () => {
    it('Debería mostrar un número elevado a una potencia', () => {
        expect(functions.exponencial(2, 3)).toBe(8);
        expect(functions.exponencial(4, 2)).toBe(16);
        expect(functions.exponencial(8, 2)).toBe(64);
    });
    it('Cualquier número elevado a 0 debería ser 1', () => {
        expect(functions.exponencial(2, 0)).toBe(1);
        expect(functions.exponencial(100, 0)).toBe(1);
        expect(functions.exponencial(-3, 0)).toBe(1);
    });
    it('Cualquier número negativo elevado a un exponente par, deberá ser positivo', () => {
        expect(functions.exponencial(-2, 2)).toBeGreaterThan(0);
        expect(functions.exponencial(-18, 4)).toBeGreaterThan(0);
        expect(functions.exponencial(-12, 6)).toBeGreaterThan(0);
    });
});

//test factorial

describe("factorial", () => {
    it('Debería mostrar el factorial de un número', () => {
        expect(functions.factorial(3)).toBe(6);
        expect(functions.factorial(4)).toBe(24);
        expect(functions.factorial(2)).toBe(2);
    });
    it('El factorial de 0 debería ser 0', () => {
        expect(functions.factorial(0)).toBe(0);
    });
});

//test sum

test('adds 1 + 2 to equal 3', () => {
    expect(functions.sum(1, 2)).toBe(3);
});