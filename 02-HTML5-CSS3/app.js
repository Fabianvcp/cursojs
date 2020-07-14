/******************************
 * Sentencia if / else
 

var nombre ="pablo";
var estadoCivil = "soltero";

if(estadoCivil === "casado"){
    //si es verdadera la condición
    console.log(nombre +  ' Esta Casado');
}else{
    console.log(nombre +' esta soltero');
}*/
/*******
 * Sentencias condicionales 


 var nombre = 'pablo';

var edad = 15;

//si la edad <, es decir menor que, 12 es un niño
//si la edad >, es decir mayor que, 11  es <, es menor que, 18 es un adolescente
//si la edad >, es decir mayor que, 17  es <, es menor que, 60 es un adulto
//edad > 60, es un anciano

if (edad < 12) {
    console.log(nombre+' es un niño');
} else if((edad > 11) && (edad < 18)){
    console.log(nombre+' es un adolescente');    
}else{
    console.log(nombre+' es un adulto');
}
 */
//operador ternario
/*
var nombre = 'pablo';

var edad = 19;

edad >= 18 ? console.log(nombre + ' es mayor de edad') : console.log(nombre + ' no es mayor que edad');
*/
/****
 * Sentencia Switch
 

 var mes = 3;

 switch (mes) {
     case 1:
        console.log('Enero');
         break;

    case 2:
        console.log(' Febrero');
            break;

    case 3:
        console.log('Marzo');
            break;
         
 
     default:
        console.log('El mes no existe');
         break;
 }*/

 /************************************
  * Sentencias repetitivas - bucles
  * Sentencia for
  * sentencia while
  * sentencia do..while
  */
// primera seccion define una variable es i que es igual a un valor
//nomalmento es cero lo cerramos es parte de form
//siguiente por la condicion seguido por punto y coma y por ultimo
//un contador


  /*for(var i = 0; i <=10;i++){
      console.log(i);
  }*/

  /*Sentencia While
  var i = 1;
  while(i <=10){
      console.log(i);
      i++;
  } */

  /** Sentencia do..while */
  var i = 1;
  do{
      console.log(i);
      i++;
  }while(i <=10)