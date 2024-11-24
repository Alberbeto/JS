const montoTotal = parseFloat(prompt("INGRESE EL MONTO TOAL DE SU COMPRA"));

const codigo= prompt("INGRESE SU CODIGO DE DESCUENTO");

if(codigo == "DESCUENTO10"){

    const descuento = montoTotal*0.10;
    const totalPagar= parseFloat(montoTotal-descuento);

    console.log("Gracia!!!.. se te aplico un descuento del 10% ahora tu monto total a pagar es: ", totalPagar);
}else if(codigo == "DESCUENTO20"){

    const descuento = montoTotal*0.20;
    const totalPagar= parseFloat(montoTotal-descuento);

    console.log("Gracia!!!.. se te aplico un descuento del 20% ahora tu monto total a pagar es: ", totalPagar);

}else {
    console.log("EL CODIGO INGRESADO NO ES VALIDO TU MONTO TOTAL A PAGAR ES DE " + montoTotal);

}