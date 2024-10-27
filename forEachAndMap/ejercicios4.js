// Ejercicios: forEach y map en JavaScript

// Datos de ejemplo
const numeros = [1, 2, 3, 4, 5];
const palabras = ["JavaScript", "es", "genial"];
const personas = [
	{ nombre: "Ana", edad: 28 },
	{ nombre: "Juan", edad: 32 },
	{ nombre: "María", edad: 25 },
];

// 1. forEach
console.log("Ejercicio 1: forEach");
// Utiliza forEach para imprimir cada número del array 'numeros' multiplicado por 2.
numeros.forEach((numero) => {
	console.log(numero * 2);
});

// Tu código aquí

// Resultado esperado:
// 2
// 4
// 6
// 8
// 10

// 2. forEach con índice
console.log("\nEjercicio 2: forEach con índice");
// Utiliza forEach para imprimir cada palabra del array 'palabras' junto con su índice.
let i = 0;
palabras.forEach((palabra) => {
	console.log("Palabra en índice " + i++ + ": " + palabra);
});
// Tu código aquí

// Resultado esperado:
// Palabra en índice 0: JavaScript
// Palabra en índice 1: es
// Palabra en índice 2: genial

// 3. forEach con objetos
console.log("\nEjercicio 3: forEach con objetos");
// Utiliza forEach para imprimir el nombre y la edad de cada persona en el array 'personas'.

// Tu código aquí
personas.forEach((persona) => {
	console.log(persona.nombre + " tiene " + persona.edad + " años");
});
// Resultado esperado:
// Ana tiene 28 años
// Juan tiene 32 años
// María tiene 25 años

// 4. map básico
console.log("\nEjercicio 4: map básico");
// Utiliza map para crear un nuevo array con cada número del array 'numeros' elevado al cuadrado.

// Tu código aquí
const numerosAlCuadrado = numeros.map((numero) => Math.pow(numero, 2));

console.log(numerosAlCuadrado);
// Resultado esperado: [1, 4, 9, 16, 25]

// 5. map con strings
console.log("\nEjercicio 5: map con strings");
// Utiliza map para crear un nuevo array con la longitud de cada palabra en el array 'palabras'.

// Tu código aquí
const longitudPalabras = palabras.map((palabra) => palabra.length);
console.log(longitudPalabras);
// Resultado esperado: [10, 2, 6]

// 6. map con objetos
console.log("\nEjercicio 6: map con objetos");
// Utiliza map para crear un nuevo array de strings que contenga solo los nombres de las personas en el array 'personas'.

// Tu código aquí
const soloNombres = personas.map((persona) => persona.nombre);
console.log(soloNombres);
// Resultado esperado: ['Ana', 'Juan', 'María']

// 7. Combinación de map y forEach
console.log("\nEjercicio 7: Combinación de map y forEach");
// Primero, utiliza map para crear un nuevo array con las edades de las personas en el array 'personas'.
// Luego, utiliza forEach para calcular y imprimir la suma de todas las edades.

// Tu código aquí
const soloEdades = personas.map((persona) => persona.edad);

let sumaEdades = 0;

soloEdades.forEach(edad => {
  sumaEdades += edad;
});

console.log("Las edades son: " + soloEdades);
console.log("La suma de todas las edades es: " + sumaEdades);
// Resultado esperado:
// Las edades son: [28, 32, 25]
// La suma de todas las edades es: 85
