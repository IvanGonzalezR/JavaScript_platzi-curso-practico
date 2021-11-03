const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    (elem1, elem2) => elem1[1] - elem2[1]);

const moda = lista1Array[lista1Array.length - 1];

/////OTRA MANERA DE VERLO (MAS REDUCIDO)/////

const NUMBERS = [2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 9];

function mode(arr) {
    return arr.sort((a, b) => arr.filter(v => v === a).length
        - arr.filter(v => v === b).length
    ).pop();
}


console.log(mode(lista1Array)); //5