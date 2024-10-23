// Ejercicios: Bucles en JavaScript

// 1. Bucle for
console.log("Ejercicio 1: Bucle for");
// Escribe una función llamada 'imprimirNumeros' que use un bucle for para imprimir
// los números del 1 al 10.

// Tu código aquí
function imprimirNumeros() {
	for (let i = 0; i <= 10; i++) {
		console.log(i);
	}
}
// Llamada a la función
imprimirNumeros();
// Debería imprimir: 1 2 3 4 5 6 7 8 9 10

// 2. Bucle for (suma)
console.log("\nEjercicio 2: Bucle for (suma)");
// Escribe una función llamada 'sumarNumeros' que use un bucle for para sumar
// los números del 1 al n, donde n es un parámetro de la función.

// Tu código aquí
function sumarNumeros(num) {
	let suma = 0;
	for (let i = 1; i <= num; i++) {
		suma += i;
	}
	return suma;
}
console.log(sumarNumeros(5)); // Debería mostrar: 15
console.log(sumarNumeros(10)); // Debería mostrar: 55

// 3. Bucle while
console.log("\nEjercicio 3: Bucle while");
// Escribe una función llamada 'contarRegresivo' que use un bucle while para
// contar regresivamente desde n hasta 1, donde n es un parámetro de la función.

// Tu código aquí
function contarRegresivo(num) {
	for (let i = num; i > 0; i--) {
		console.log(i);
	}
}
contarRegresivo(5);
// Debería imprimir: 5 4 3 2 1

// 4. Bucle do-while
console.log("\nEjercicio 4: Bucle do-while");
// Escribe una función llamada 'adivinarNumero' que use un bucle do-while para
// simular un juego donde el usuario intenta adivinar un número entre 1 y 10.
// La función debe generar un número aleatorio y "preguntar" al usuario hasta
// que adivine correctamente. (Simula las entradas del usuario con un array de números)

// Tu código aquí
function adivinarNumero(intentosUsuario) {
	let max = 10;
	let numAleatorio = Math.floor(Math.random() * max + 1);

	let i = 0;
	let contador = 1;
	let maxDeIntentos = intentosUsuario.length;

	console.log("Intenta adivinar el número (entre 1 y 10).");

	do {
		if (intentosUsuario[i] === numAleatorio) {
			console.log(
				`Intento ${contador}: ¡Correcto! Has adivinado en ${contador} intentos. El número era ${numAleatorio}.`
			);
			return;
		} else if (intentosUsuario[i] < numAleatorio) {
			console.log(`Intento ${contador}: Demasiado bajo`);
		} else {
			console.log(`Intento ${contador}: Demasiado alto`);
		}

		i++;
		contador++;
	} while (i != maxDeIntentos);
	console.log("Game Over. El número era " + numAleatorio + ".");
}
const intentosUsuario = [3, 7, 5, 2]; // Simula las entradas del usuario
adivinarNumero(intentosUsuario);
// Ejemplo de salida:
// Intenta adivinar el número (entre 1 y 10)
// Intento 1: Demasiado bajo
// Intento 2: Demasiado alto
// Intento 3: ¡Correcto! Has adivinado en 3 intentos.

// 5. Bucle for (array)
console.log("\nEjercicio 5: Bucle for (array)");
// Escribe una función llamada 'encontrarMayor' que use un bucle for para encontrar
// el número mayor en un array de números.

// Tu código aquí
function encontrarMayor(array){
    let numMayor = array[0];

    for (let i = 1; i < array.length; i++) {
        if (numMayor < array[i]) numMayor = array[i];
    }
    return numMayor;
}
console.log(encontrarMayor([2, 5, 1, 9, 3])); // Debería mostrar: 9
console.log(encontrarMayor([-1, -5, -2])); // Debería mostrar: -1

// 6. Bucle while (potencia)
console.log("\nEjercicio 6: Bucle while (potencia)");
// Escribe una función llamada 'calcularPotencia' que use un bucle while para calcular
// la potencia de un número. La función debe tomar dos parámetros: la base y el exponente.

// Tu código aquí
function calcularPotencia(base, exponente){
    let res = 1;
    let i = 0;

    while (i < exponente) {
        res *= base;
        i++;
    }
    return res;
}
console.log(calcularPotencia(2, 3)); // Debería mostrar: 8
console.log(calcularPotencia(5, 2)); // Debería mostrar: 25
