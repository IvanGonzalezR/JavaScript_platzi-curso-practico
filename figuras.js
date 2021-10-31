// Codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado ** 2;
}
console.groupEnd();
// Codigo del cuadrado

// Codigo del triangulo
console.group("Triangulos");
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();
// Codigo del triangulo

// Codigo del circulo
console.group("Circulo");

//Radio
//Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
//PI
const PI = Math.PI;
//Circunferencia
function perimetroCirculo(radio) {
    return diametroCirculo(radio) * PI;
}
//Area
function areaCirculo(radio) {
    return PI * (radio ** 2);
}
console.groupEnd();
// Codigo del circulo


//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const primetro = perimetroCuadrado(value);
    alert(primetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function caluclarIsosceles(lado1, lado2, base) {
    if (lado1 != lado2) {
        return alert("Las medidas ingresadas no corresponden a un triangulo isósceles.");
    } else {
        return "La altura del triangulo mide: " + Math.sqrt(4 * (lado1 ** 2) - (base ** 2)) / 2;
    }

}