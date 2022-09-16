const creoID = ()=> parseInt(Math.random() * 100000) //creo un ID numérico dinámico

function agregarProducto() {
    let id = creoID()
    let nombre = prompt("Ingresa la descripción del producto:")
    let importe = prompt("Ingresa el precio del producto:")
    const prod = {id: id, nombre: nombre, importe: importe}
        //new Producto(id, nombre, importe)
        productos.push(prod)
        console.table(productos)
}

function generadorAutomatico() {
    productos.push(new Producto(1, "RTX 3060 12GB GDDR6", 113000))
    productos.push(new Producto(2, "RTX 3070 8GB GDDR6", 160000))
    productos.push(new Producto(3, "RTX 3080 10GB GDDR6", 210000))
    productos.push(new Producto(4, "RX 6700 XT 12GB GDDR6", 129000))
    productos.push(new Producto(5, "RX 6800 XT 16GB GDDR6", 180000))
}
generadorAutomatico()

// function recorrerProductos() {
//     // debugger
//     //el objeto del array
//     for (producto of productos) {
//         console.table(producto)
//     }
// }

//funcion para filtrar los productos

const inputFiltrar = document.querySelector(input)

function filtrarProductos() { //FILTRAR PRODUCTOS EN LA TABLA INGRESANDO PARTE DEL NOMBRE
    inputFiltrar.value = inputFiltrar.value.trim().toUpperCase()
    if (inputFiltrar.value !== "") {
        const resultado = productos.filter(producto => producto.nombre.includes(inputFiltrar.value))
              if (resultado.length === 0) {
                console.clear()
                console.warn("No se encontraron productos.")
                cargarProductos(productos)
              } else {
                cargarProductos(resultado)
              }
    } else {
        cargarProductos(productos)
    }
}

inputFiltrar.addEventListener("input", filtrarProductos) //A medida que escribimos.