const altura =parseFloat(prompt("INGRESE SU ALTURA EN METROS"));
const peso =parseFloat(prompt("INGRESE SU PESO EN KG"));

const imc = peso/(altura*altura);
const decimal = parseFloat(imc.toFixed(2));
if( decimal<18.5){

    console.log("su IMC es de " + decimal + " se encuntra dentro del rango de peso insuficiente");
}else if(decimal>=18.5 && decimal <=24.9){
    console.log("su IMC es de " + decimal + " se encuntra dentro del rango de peso normal");

}else if(decimal>=25.0 && decimal <=29.9){
    console.log("su IMC es de " + decimal + " se encuntra dentro del rango de sobrepeso");

}else {
    console.log(" se encuntra dentro del rango de obesidad");

}