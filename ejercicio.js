const factorial = (value) => {
    let operacion = value;
    while (value > 1) {
        value--;
        operacion *= value;
    }
    return operacion;
};

const exponencial = (base, exponent) => {
    let operacion = 1;
    while (exponent > 0) {
        operacion *= base;
        exponent--;
    }
    return operacion;
};

function sum(a, b) {
    return a + b;
};

const functions = {
    exponencial,
    factorial,
    sum,
}

module.exports = functions;