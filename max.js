const { maxHeaderSize } = require("http");

function findMaxParam(valor1, valor2, valor3) {
  if (valor1 > valor2 && valor1 > valor3) {
    return valor1;
  } else {
    if (valor2 > valor1 && valor2 > valor3) {
      return valor2;
    } else {
      return valor3;
    }
  }
}

function findMaxArray(vector) {
  if (vector.length > 0) {
    let max = vector[0];
    for (let index = 1; index < vector.length; index++) {
      if (vector[index] > max) {
        max = vector[index];
      }
    }
    return max;
  } else {
    return "Arreglo vacio";
  }
}

function maxWhile(vector) {
  let i = 0;
  let valorMaximo = 0;
  while (i < vector.length) {
    if (valorMaximo < vector[i] || i === 0) {
      valorMaximo = vector[i];
    }
    i++;
  }
  return valorMaximo;
}

// findMaxArray([2,5,8,6,4,1]);

module.exports = {findMaxParam, findMaxArray, maxWhile};
