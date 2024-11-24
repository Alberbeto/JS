
const importe = parseFloat(prompt("INGRESE EL IMPORTE DE LA COMPRA"));

const tipo = prompt("SELECCIO EL TIPO DE IVA \n1. BASICO 10%\n2. REDUCIDO 5%\n3. SUPERREDUCIDO 2%")

if(tipo==1){

    const iva = parseFloat(0.10 * importe);
    const total = parseFloat(importe + iva);
    
    console.log("el monto total con iba es de: " + total);
}else if(tipo==2){

    const iva = parseFloat(0.05*importe);
    const total = parseFloat(importe + iva);

    console.log("el monto total con iba es de: " + total);
}else if(tipo==3){

    const iva = parseFloat(0.02*importe);
    const total = parseFloat(importe + iva);

    console.log("el monto total con iba es de: " + total);
}else {

    console.log("el tipo de iba seleccionado no existe");
}