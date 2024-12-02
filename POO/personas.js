class Persona{

    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad=edad;

      
    }
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}


const persona1 = new Persona("Maria",25);
const persona2 = new Persona("Carlos",20);


persona1.saludar();
persona2.saludar();