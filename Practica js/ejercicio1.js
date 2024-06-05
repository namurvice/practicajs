//transformar grados celsius a grados fahrenheit

//alert de lo que se va a hacer
alert("ingrese una temperatura en grados Celsius para transformarla en grados Fahrenheit");

//ingrese en el prompt una temperatura en grados celsius
let grado = Number(prompt("ingrese una temperatura en grados Celsius para"));

//definir la variable de Fahrenheit
let resultado;

//(0 °C × 9/5) + 32 = 32 °F
resultado=((grado * (9/5)) + 32 );

alert("la temperatura pasada a grados Fahrenheit es "+ resultado);  

