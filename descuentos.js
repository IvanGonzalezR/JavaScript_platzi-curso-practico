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

function onClickButtonPriceDiscount() {
    let inputPrice = document.getElementById("InputPrice").value;
    let inputCoupon = document.getElementById("InputCoupon").value;

    const isCouponValueValid = function (coupon) {
        return coupon.name === inputCoupon;
    };

    const userCoupon = cuponesDisponibles.find(coupon => coupon.name === inputCoupon);

    if (!userCoupon) {
        alert("El cupón " + inputCoupon + " no es válido");
    }
    //Al intentar acceder a userCoupon.Discount, si no existe tira un error
    try {
        let precioConDescuento = calcularPrecioConDescuento(inputPrice, userCoupon.discount);
        const ResultP = document.getElementById("ResultP");
        ResultP.innerText = "El precio con descuento es: " + precioConDescuento;
    } catch (error) {
        console.error("Se cacheo el error");
    }


}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });