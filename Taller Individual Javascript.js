//Crea un programa que solicite al usuario dos números y muestre la suma de ambos.

// const num1 = 12;
// const num2 = 13;

// console.log('La suma de los número que ingresó es ' + (num1+num2));

//Escribe un programa que calcule el área de un paralelogramo utilizando cuando la base sea 10 y la altura 7

// const base = 10;
// const altura = 7;

// console.log ('El area calculada del paralelogramo es ' + (base*altura))

// _________________________________________________________________________________________________________________________

// Crea un array de objetos, donde cada objeto represente a una persona con propiedades como nombre, edad y profesión. Muestra en la consola la profesión de cada persona en el array.

// const persona = [{
//     nombre: 'Luis',
//     edad: 10,
//     profesion: 'Profesor',
// },{
//     nombre: 'Camilo',
//     edad: 19,
//     profesion: 'Editor',
// },{
//     nombre: 'Alba',
//     edad: 48,
//     profesion: 'Doctora',
// },{
//     nombre: 'Jesus',
//     edad: 28,
//     profesion: 'Programador',
// },{
//     nombre: 'Cris',
//     edad: 35,
//     profesion: 'Sistema',
// }]

// persona.forEach(persona => console.log(persona.profesion));

// _________________________________________________________________________________________________________________________

// Crea un programa que declare un array con varios nombres y luego los muestre uno por uno en la consola.

// let nombres = ['Luis','Camila','Alba','Doctora','Cris'];

// for (i = 0; i < nombres.length; i++) {
//     console.log(nombres[i]);
// };

// // Escribe un programa que pida al usuario cinco números, los guarde en un array y luego muestre el número mayor.

// let numeros = [9,72,32,10,1];

// const numeromayor = Math.max(...numeros);
// console.log('El valor mayor es ' + numeromayor);

// _________________________________________________________________________________________________________________________

// Crea un programa que muestre en la consola los números del 1 al 10 utilizando un bucle for.

// for (i = 1; i <= 10; i++){
//     console.log(i);
// }

// // Escribe un programa que solicite al usuario un número y luego muestre en la consola todos los números pares desde 1 hasta ese número.

// const numero = 15;

// for (let i = 0; i <= numero; i+= 2) {
//     console.log(i);
// }

// _________________________________________________________________________________________________________________________

//Escribe un programa que solicite al usuario su edad y muestre un mensaje indicando si es mayor de edad o no

// const edad = 19;

// if (edad => 18) {
//     console.log('Usted es mayor de edad');
// } else {
//     console.log('Usted es menor de edad');
// }

// // Crea un programa que pida al usuario un número y muestre un mensaje indicando si es positivo, negativo o cero.

// const numero = 0;

// if (numero > 0) {
//     console.log('Este número es positivo');
// } else if (numero < 0) {
//     console.log('Este número es negativo');
// } else {
//     console.log('Este número es cero');
// };

// _________________________________________________________________________________________________________________________


// // Crea un objeto llamado "persona" con propiedades como nombre, edad y profesión. Luego, muestra cada una de las propiedades en la consola

// const persona = {
//     nombre: 'Cristian',
//     edad: 25,
//     profesion: 'Chef',
// };

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.profesion);

// // Escribe un programa que simule un carrito de compras. Crea un objeto "carrito" que tenga propiedades como productos y total. Agrega varios productos al carrito y muestra el total.

// const carrito = [{
//     pproducto: 'Carne',
//     total: 3,
// },{
//     producto: 'Cebella',
//     total: 2,
// },{
//     producto: 'Condimentos',
//     total: 9,
// },{
//     producto: 'Aceite',
//     total: 1
// },{
//     producto: 'Sal',
//     total: 2,
// },{
//     producto: 'Carbon',
//     total: 1,
// }];

// // carrito.forEach(totalTodo => console.log(totalTodo.total)); //este es por el precio de cada uno va solo sin el 122 y 124
// const totalCarrito = carrito.reduce((total, producto) => total + producto.total, 0); // da el precio total de todo  mas con la linea 124 (no juntarlo con el 121)

// console.log("Total de todo: " + totalCarrito);

// _________________________________________________________________________________________________________________________

// Crea un programa que solicite al usuario un número y luego muestre en la consola todos los números pares menores o iguales a ese número.

// const numero = 20;

// for(let i = numero; i >= 0; i -= 2) {
//     if(i < 0) {
    //         break
//     } else {
//     console.log(i);
//     }
// }

// // Escribe un programa que simule un juego de adivinanzas. Genera un número aleatorio entre 1 y 10 y pide al usuario que lo adivine. Muestra un mensaje indicando si el usuario acertó o no.

// const numeropensado = Math.round(Math.random()*10);
// const numerolanzado = 1;

// if (numeropensado == numerolanzado) {
    //     console.log("Usted ha acertado, el número pensado era: " + numeropensado);
// } else {
//     console.log("No haz acertado el numero pensado :(");
// }

// _________________________________________________________________________________________________________________________
