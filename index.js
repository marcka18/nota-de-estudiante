let nombre = prompt("indique el nombre del estudiante");
let nota1 = parseFloat(prompt("indique la primera nota"));
let nota2 = parseFloat(prompt("inserte la segunda nota"));
let nota3 = parseFloat(prompt("inserte la tercera nota"));
let promedio;
promedio = (nota1+nota2+nota3)/3
mensaje = "El Estudiante: " + nombre + " tiene un promedio de: "
console.log (mensaje,promedio)
