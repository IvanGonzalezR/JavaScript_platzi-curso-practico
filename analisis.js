const salariosCol = colombia.map(persona => persona.salary);
const salariosColSorted = salariosCol.sort((a, b) => a - b);

function esPar(num) {
    return num % 2 == 0;
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(function (acum = 0, elem) {
        return acum + elem;
    });
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1], [personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});