// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = [];
  for (var key in objeto) {
    array.push([key, objeto[key]]);
  }
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var array = string.split("");
  var suma = 0;
  var obejeto1 = {};
  var obejeto2 = {};

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[i] === array [j]) {
        suma++;
      }
    }
    obejeto1 = {[array[i]]: suma};
    Object.assign(obejeto2, obejeto1);
    suma = 0;
  }
  return obejeto2;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var array = s.split("");
  var min = [];
  var may = [];
  var resultado = [];
  var resultadoTexto;

  array.forEach(function(elemento){
    if (elemento === elemento.toLowerCase()) {
      min.push(elemento);
    } else {
      may.push(elemento);
    }
  });

  resultado = may.concat(min);
  resultadoTexto = resultado.join("");
  return resultadoTexto;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var array1 = str.split(" ");
  var array2 = [];
  var texto = "";

  array1.forEach(function(elemento) {
    array2.push(elemento.split("").reverse().join(""));
  });

  texto = array2.join(" ");

  return texto;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var texto1 = numero.toString();
  var texto2 = texto1.split("").reverse().join("");

  if (texto1 === texto2) {
    return "Es capicua";
  }
  return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var array1 = cadena.split("");
  var array2 = [];

  array1.forEach(function(elemento) {
    if (elemento !== "a" && elemento !== "b" && elemento !== "c") {
      array2.push(elemento);  
    }
  });
  return array2.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort((a, b) => {
    var a1 = a.length;
    var b1 = b.length;

    if (a1 < b1) {
      return -1;
    }

    if (a1 > b1) {
      return 1;
    }
    return 0;
  });
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var array = arreglo1.filter(x => arreglo2.includes(x));

  return array;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

