function esParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} es par`);
    } else {
        console.log(`${numero} es impar`);
    }
}
//Función para determinar si un número es par o impar



function compararNumeros(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} es mayor que ${num2}`);
    } else if (num2 > num1) {
        console.log(`${num2} es mayor que ${num1}`);
    } else {
        console.log('Los números son iguales');
    }
}
//Función para comparar dos números


function esMultiploDeCinco(numero) {
    if (numero % 5 === 0) {
        console.log(`${numero} es múltiplo de 5`);
    } else {
        console.log(`${numero} no es múltiplo de 5`);
    }
}
//Función para verificar si un número es múltiplo de 5


function imprimirHasta(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}
//Función para imprimir números desde 0 hasta un número dado


function imprimirPalabra(palabra, veces) {
    for (let i = 0; i < veces; i++) {
        console.log(palabra);
    }
}

//Función para imprimir una palabra varias veces


function imprimirArray(array) {
    array.forEach(elemento => {
        console.log(elemento);
    });
}

//Función para imprimir todos los elementos de un array

function imprimirArrayExceptoQuinto(array) {
    array.forEach((elemento, index) => {
        if (index !== 4) {
            console.log(elemento);
        }
    });
}

//Función para imprimir un array excepto el elemento en la 5ta posición

function multiplicarElementosArray(array, numero) {
    array.forEach(elemento => {
        console.log(elemento * numero);
    });
}
//Función para multiplicar los elementos de un array por un número dado



