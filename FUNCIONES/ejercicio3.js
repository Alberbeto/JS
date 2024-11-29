function numeros(array, nuevovalor){

    let  numeroMayores = [];
    for(let i=0;i<array.length; i++){

        if(array[i]>nuevovalor){
          
            numeroMayores.push(array[i]);
            
        }

    }

    return numeroMayores;

}


let mayores =([12,25,30,44,54,68]);
let valorDado = 44


console.log(numeros(mayores, valorDado));

