// const precioOriginal = 100;
// const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

let cuponesDisponibles = [
    {
        name: "cupon1",
        discount: 10
    },
    {
        name: "cupon2",
        discount: 20
    },
    {
        name: "cupon3",
        discount: 30
    }
];

// function esValidoElCupon(coupon) {
//     return cuponesDisponibles.name.find(coupon);
// }

function onClickButtonPriceDiscount() {
    let inputPrice = document.getElementById("InputPrice").value;
    let inputCoupon = document.getElementById("InputCoupon").value;

    const isCouponValueValid = function (coupon) {
        return coupon.name === inputCoupon;
    };

    const userCoupon = cuponesDisponibles.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + inputCoupon + " no es válido");
    }
    // let esValido = esValidoElCupon(inputCoupon);

    // if (!esValido) {
    //     alert("El cupon no es valido we");
    // } else {
    //     alert("El cupon " + esValido.name + "con " + esValido.discount
    //         + "% ha sido aplicado!");
    // }

    let precioConDescuento = calcularPrecioConDescuento(inputPrice, userCoupon.discount);
    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "El precio con descuento es: " + precioConDescuento;
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });