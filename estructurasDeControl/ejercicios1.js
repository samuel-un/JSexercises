// Ejercicios: Condicionales en JavaScript

// 1. if simple
console.log("Ejercicio 1: if simple");
// Escribe una función llamada 'esMayorDeEdad' que tome una edad como parámetro
// y devuelva true si la edad es 18 o mayor, y false en caso contrario.

// Tu código aquí
function esMayorDeEdad(edad) {
	if (edad >= 18) {
		return true;
	} else {
		return false;
	}
}
console.log(esMayorDeEdad(20)); // Debería mostrar: true
console.log(esMayorDeEdad(16)); // Debería mostrar: false

// 2. if-else
console.log("\nEjercicio 2: if-else");
// Escribe una función llamada 'calificarNota' que tome una puntuación (0-100)
// y devuelva 'Aprobado' si la puntuación es 60 o mayor, y 'Suspenso' en caso contrario.

// Tu código aquí
function calificarNota(nota) {
	if (nota < 0 || nota > 100) {
		console.log("La nota es de 0 a 100, vuelve a intentarlo.");
		calificarNota(75); // Volveria a pedir introducir la nota
	}

	if (nota >= 60) {
		return "Aprobado";
	} else {
		return "Suspenso";
	}
}
console.log(calificarNota(75)); // Debería mostrar: 'Aprobado'
console.log(calificarNota(45)); // Debería mostrar: 'Suspenso'

// 3. if-else if
console.log("\nEjercicio 3: if-else if");
// Escribe una función llamada 'obtenerEstacionDelAnio' que tome un mes (1-12)
// y devuelva la estación del año correspondiente en el hemisferio norte.
// (Primavera: 3-5, Verano: 6-8, Otoño: 9-11, Invierno: 12, 1, 2)

// Tu código aquí
function obtenerEstacionDelAnio(numMes) {
	if (numMes >= 3 && numMes <= 5) {
		return "Primavera";
	} else if (numMes >= 6 && numMes <= 8) {
		return "Verano";
	} else if (numMes >= 9 && numMes <= 11) {
		return "Otoño";
	} else if (numMes == 12 || numMes == 1 || numMes == 2) {
		return "Invierno";
	}
}
console.log(obtenerEstacionDelAnio(2)); // Debería mostrar: 'Invierno'
console.log(obtenerEstacionDelAnio(6)); // Debería mostrar: 'Verano'
console.log(obtenerEstacionDelAnio(10)); // Debería mostrar: 'Otoño'

// 4. switch
console.log("\nEjercicio 4: switch");
// Escribe una función llamada 'obtenerDiaLaboral' que tome un número del 1 al 7
// y devuelva 'Día laboral' para los días del 1 al 5, 'Fin de semana' para 6 y 7,
// y 'Número de día inválido' para cualquier otro número.

// Tu código aquí
function obtenerDiaLaboral(numDia) {
	switch (numDia) {
		case 1:
			return "Dia laboral";
		case 2:
			return "Dia laboral";
		case 3:
			return "Dia laboral";
		case 4:
			return "Dia laboral";
		case 5:
			return "Dia laboral";
		case 6:
			return "Fin de semana";
		case 7:
			return "Fin de semana";
		default:
			return "Número de día inválido";
	}
}
console.log(obtenerDiaLaboral(3)); // Debería mostrar: 'Día laboral'
console.log(obtenerDiaLaboral(6)); // Debería mostrar: 'Fin de semana'
console.log(obtenerDiaLaboral(8)); // Debería mostrar: 'Número de día inválido'

// 5. Condicional ternario
console.log("\nEjercicio 5: Condicional ternario");
// Escribe una función llamada 'esPar' que tome un número como parámetro
// y devuelva 'Par' si el número es par, e 'Impar' si es impar.
// Utiliza el operador ternario.

// Tu código aquí
function esPar(num){
    return num % 2 == 0 ? "Par" : "Impar";
}
console.log(esPar(4)); // Debería mostrar: 'Par'
console.log(esPar(7)); // Debería mostrar: 'Impar'

// 6. Combinación de condicionales
console.log("\nEjercicio 6: Combinación de condicionales");
// Escribe una función llamada 'puedeConducir' que tome dos parámetros:
// edad (número) y tieneCarnet (booleano).
// La función debe devolver true si la persona tiene 18 años o más Y tiene carnet,
// y false en cualquier otro caso.

// Tu código aquí
function puedeConducir(edad, tieneCarnet){
    if(edad >= 18 && tieneCarnet){
        return true;
    } else {
        return false;
    }
}
console.log(puedeConducir(20, true)); // Debería mostrar: true
console.log(puedeConducir(17, true)); // Debería mostrar: false
console.log(puedeConducir(20, false)); // Debería mostrar: false
