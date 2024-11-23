/*
Declara una variable a,b,c con valñores numericos y utiliza
condiciones para deternimar cual de ellos es el mayot
*/

const a=parseInt(prompt("INGRESE UN NUMERO"));
const b=25;
const c= 45;

if(a>b&& a>c){
    console.log('a es el mayor',a);
}else if(b>a&& b>c){
    console.log('b es el mayor',b);
}else {
    console.log('c es el mayor',c);
}