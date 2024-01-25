/*Retroalimentación:
La desarrolladora se mostro segura de si misma, inicio por aclarar detalles sobre el problema a resolver y seguido de esto se dedicó a generar el código basándose en la lógica que había construido con su proceso metódico. 
*/

const miArrayPrueba = ["amarillo", "rojo", "verde", "morado","azul", "blanco", "naranja"];


const filtroPalabras = (palabra, conjunto) => {
    return conjunto.filter(word => word.length > palabra.length)

};

const palabra = "rosa";

const resultado = filtroPalabras(palabra, filtroPalabras);
console.log(resultado);


//Ejercicio 2
const ulElement = document.getElementById('miLista'); 

