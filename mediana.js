const lista1 = [100, 200, 500, 400000000, 400, 100];
const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

function compareNumbers(a, b) {
    return a - b;
}

function calcularMediana(lista) {

    const mitadLista = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        lista.sort(compareNumbers);
        const elem1 = lista[mitadLista];
        const elem2 = lista[mitadLista - 1];
        mediana = (elem1 + elem2) / 2;
    } else {
        lista1.sort(compareNumbers);
        mediana = lista[mitadLista];
    }
}

if (esPar(lista1.length)) {
    lista1.sort(compareNumbers);
    const elem1 = lista1[mitadLista1];
    const elem2 = lista1[mitadLista1 - 1];
    mediana = (elem1 + elem2) / 2;
} else {
    lista1.sort(compareNumbers);
    mediana = lista1[mitadLista1];
}