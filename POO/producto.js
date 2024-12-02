class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarDetalles(){
        console.log(`Prodcuto : ${this.nombre} y el precio es : ${this.precio} soles`)
    }
}


const producto1 = new Producto("Mouse",1500);

producto1.mostrarDetalles();