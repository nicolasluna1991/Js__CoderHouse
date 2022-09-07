function listarPlacaVideo() {
    for (let i = 0; i < placaVideo.length; i++) {
        console.log(placaVideo[i])
    }
}

function agregarPlacaVideo() {
    let nuevaPlacaVideo = prompt("Ingresa una nueva placa de video:")
    let resultado = placaVideo.includes(nuevaPlacaVideo)
        if (resultado === false) {
            placaVideo.push(nuevaPlacaVideo)
            console.table(placaVideo)    
        } else {
            console.warn("La placa de video ya existe en el array.")
        }
}

function buscarPlacaVideo() {
    placaVideo.pop()
    console.table(placaVideo)
}

function quitarPlacaVideo() {
    let posicion = prompt("Indica la placa de video a quitar:")
    let indice = placaVideo.indexOf(posicion)
    if (indice > -1) {
        let resultado = placaVideo.splice(indice, 1)
        console.log(resultado)
        console.table(placaVideo)
    } else {
        console.warn("No se ha encontrado la placa de video:", posicion)
    }
}