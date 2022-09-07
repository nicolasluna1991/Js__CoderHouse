const IVA = 1.21
const IVAIMP = 1.35

class Producto{
    constructor(nombre, precio, stock, nacional){
        this.nombre = nombre.toUpperCase()
        this.precio = parseFloat(precio)
        this.stock = parseFloat(stock)
        this.nacional = nacional
    }
    precioConIva(){
        let precioIVA
        if (this.nacional){
            precioIVA = this.precio * IVA
        } else{
            precioIVA = this.precio * IVAIMP
        }
        return precioIVA.toFixed(2)
    }
    descontarStock(unidades){
        return this.stock = this.stock - unidades
    }
    cotizar (unidades){
        let resultado = this.precioConIva() * unidades
        return resultado.toFixed(2)
    }
}

const producto1 = new Producto("RTX 3060 12GB DDR6", 113000, 10, false)
const producto2 = new Producto("RTX 3070 8GB DDR6", 160000, 10, false)
const producto3 = new Producto("RTX 3080 10GB DDR6", 210000, 10, false)
const producto4 = new Producto("RX 6700 XT 12GB DDR6", 129000, 10, true)
const producto5 = new Producto("RX 6800 XT 16GB DDR6", 180000, 10, true)

function cargarProducto(){
    
}
