
/*consigna Pedir mediante un prompt y sumarle otro número en cada repetición,
realizando una salida por cada resultado */

debugger

let limite = parseInt(prompt("Ingresa un número:"));

for (let i = 0; i < limite; i++){
    console.log('iteracion No.', i)
    }

/*Pedir un texto mediante prompt, concatenar un valor en cada repetición,
realizando una salida por cada resultado, hasta que se ingresa "ESC" */

let entrada = prompt ("Escribe algo");

while (entrada != "ESC") {
    alert ("El usuario ingresó " + entrada);
    entrada = prompt("Escribe otra cosa");
}

/*consigna Pedir un número por prompt, repetir la salida del mesaje "hola"
la cantidad de veces ingresadas */

let num = parseInt(prompt())

for (let i = 0; i < num; i++){
    alert("Hola")
}