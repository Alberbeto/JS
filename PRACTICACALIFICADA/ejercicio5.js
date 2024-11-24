/*class OrderManager {
    constructor() {
        this.orders = []; // Array para almacenar las órdenes
    }

    // Método para agregar una nueva orden
    addOrder(order) {
        this.orders.push(order);
        console.log(Orden agregada: ${JSON.(order)});
    }

}*/

   /* // Método para eliminar una orden por número de pedido
    removeOrder(orderNumber) {
        const initialLength = this.orders.length;
        this.orders = this.orders.filter(order => order.number !== orderNumber);

        if (this.orders.length < initialLength) {
            console.log(Orden con número ${orderNumber} eliminada.);
        } else {
            console.log(Orden con número ${orderNumber} no encontrada.);
        }
    }

    // Método para listar todas las órdenes
    listOrders() {
        if (this.orders.length === 0) {
            console.log("No hay órdenes disponibles.");
        } else {
            console.log("Órdenes:");
            this.orders.forEach(order => {
                const { number, item, quantity, price } = order;
                console.log(
                    `Número: ${number}, Artículo: ${item}, Cantidad: ${quantity}, Precio unitario: $${price.toFixed(
                        2
                    )}, Total: $${(quantity * price).toFixed(2)}`
                );
            });
        }
    }

    // Método para filtrar órdenes por número de pedido
    filterOrderByNumber(orderNumber) {
        const order = this.orders.find(order => order.number === orderNumber);
        if (order) {
            const { number, item, quantity, price } = order;
            console.log(
                `Orden encontrada: Número: ${number}, Artículo: ${item}, Cantidad: ${quantity}, Precio unitario: $${price.toFixed(
                    2
                )}, Total: $${(quantity * price).toFixed(2)}`
            );
        } else {
            console.log(Orden con número ${orderNumber} no encontrada.);
        }
    }
}*/

// Menú interactivo
/*const orderManager = new OrderManager();
const prompt = require("prompt-sync")(); // Requiere instalar el paquete "prompt-sync"*/

let option;

    console.log("\n--- Menú de Gestión de Órdenes ---");
    console.log("1. Agregar orden");
    console.log("2. Eliminar orden");
    console.log("3. Listar órdenes");
    console.log("4. Filtrar por número de pedido");
    console.log("5. Salir");

    option = parseInt(prompt("Selecciona una opción: "));

    switch (option) {
        case 1:
            const number = parseInt(prompt("Número de pedido: "));
            const item = prompt("Nombre del artículo: ");
            const quantity = parseInt(prompt("Cantidad: "));
            const price = parseFloat(prompt("Precio por unidad: "));
            const precioPagar =parseFloat(quantity*price);
            if(qu)
            console.log(" SU NUMERO DE PEDIDO ES " + number + "\n SU NOMBRE DEL ARTICULO ES: "+item +"\nEL PRECIO A PAGAR ES " + precioPagar);

            break;

        case 2:
            const removeNumber = parseInt(prompt("Número de pedido a eliminar: "));
            console.log("")
          
            break;

        case 3:
         
            break;

        case 4:
            const filterNumber = parseInt(prompt("Número de pedido a buscar: "));
            
            break;

        case 5:
            console.log("Saliendo del programa...");
            break;

        default:
            console.log("Opción no válida, intenta de nuevo.");
            break;
    }
