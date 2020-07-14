/**
 * Los arreglos/array/matrices son objetos de tipo lista 
 * cuyo prototipo tiene métodos para realizar operaciones de reccorrido
 * y mutación.
 *                  0      1        2
 * var bebidas = ["cafe","te","limonada"];
 * 
 *                           0      1       2
 * var bebidas = new Array("cafe","te","limonda");
 * 
 */
console.log('ok');

/**
 * arreglos js
 */
var nombre = ['Pablo', 'Carlos', 'Ana'];
var vegetales = new Array('Tomate','Lechuga','Zanahoria');
console.log(nombre[2]);
console.log(nombre[1]);

nombre[1] = 'Jose';
console.log(nombre[1]);

/***
 * Operaciones con arreglos
 
 var frutas = ['pera','manzana','uva','sandia'];
//formas de recorrer los areglos
//1
for (var i = 0; i <= frutas.length-1; i++) {
    console.log(frutas[i]);
    
}
//2
frutas.forEach(function(elemento,indice,array){
    console.log(elemento,indice);
});

//agregar valores a un arreglo
frutas.push('naranja');

//agregar al incio
frutas.unshift('fesa');

//Eliminar el ultimo elemento
frutas.pop();
//Eliminar elemento al principio
frutas.shift();

var pos = frutas.indexOf('uva');

frutas.splice(1,2);
*/

//arreglos con elementos de diferentes tipos
var persona = ['Pablo','Vazquez',34,'9999999999999',1.75];
console.log(persona);