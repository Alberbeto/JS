const a=parseInt(prompt("Ingrese el primer numero"));
const b=parseInt(prompt("Ingrese el segundo numero"));

if(a>b){
    console.log(a+" es mayor que "+b);
}else if(a==b) {
    console.log(a+ " es igual " +b);
}else{
    console.log(a+' es menor que '+b);
}