// Inicializar variables
let producto = ''
let precio = 0
let cantidad = 0
let precioTotal = 0
let cantidadTotal = 0
let seguirComprando = false


do {
    producto = prompt('¿Queres comprar shampoo, acondicionador o ambos?')
    cantidad = prompt('¿Cuantos queres comprar?')

    switch (producto) {
        case 'shampoo':
            precio = 500
            break;
        case 'acondicionador':
            precio = 700
            break;
        case 'ambos':
            precio = 1200
            break;
        default:
            alert('El producto no esta en el catálogo!')
            precio = 0
            cantidad = 0
            break;
    }

    precioTotal += precio * cantidad
    cantidadTotal += cantidad

    seguirComprando = confirm('¿Queres agregar otro producto?')
} while (seguirComprando);

alert('El total de tu compra es: '+precioTotal)