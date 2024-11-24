const edad=parseInt(prompt("Ingrese su edad: "));
const sueldo= parseInt(prompt("Sueldo: "));

if(edad>=18){

    if(sueldo>=500 && sueldo <=2000){

        console.log("el usted es elegible para el subsidio");
    }else{
        console.log("Usted no es elegible para el subsidio");
    }
}else{
    console.log("Usted no es mayor de edad");
}