/* hositing con variable, hace que la declaracion (MÁS NO LA ASIGNACION) se eleve tambien así que un 

unaFunction(); // llamamos a la funcion
var miVarianle = 'ALGO' // declaramos y ASIGNAMOS VALOR

function unaFunction() { // DEFINICIÓN DE FUNCION
    aqui aun no tiene valor 'miVariable'
}

se pasa a esto

var miVariable;
function unaFunction() {
    -- aqui aun no tiene valor 'miVariable'
}
unaFunction() //hasta al final la llamada
miVariable = 'ALGO' // hasta el final la declaracion

*/


// esta function por expresion, no existe el HOISTING 
// var printPokemon = function printPokemon() {
//     console.log(pokemon);
// };


// de esta manera si existe un hoisting , esta es una función por declaracion (de funcion)
// function printPokemon() {
//     console.log(pokemon);
// };


printPokemon();
 var pokemon = 'PIKACHU';

 var printPokemon = function printPokemon() {
     console.log(pokemon);
 };
 
 