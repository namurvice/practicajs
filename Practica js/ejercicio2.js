//Crear un programa donde se introduzcan los tres ángulos internos de un triángulo
//y se determine si el triángulo es válido o no.

//alert de que hacer
alert("introduzca los tres ángulos internos de un triángulo para saber si el triángulo es valido o no");

//ingresa los 3 ángulo
let n1 = Number(prompt("ingrese el primer ángulo"));
let n2 = Number(prompt("ingrese el segundo ángulo"));
let n3 = Number(prompt("ingrese el tercer ángulo"));

//definir resultado de la suma de los ángulos
let suma;

//suma de los ángulos
suma = n1 + n2 + n3;

//¿el ángulo es valido?
if(suma == 180){
    alert("el triángulo es valido");
}else{
    alert("el triángulo no es valido");
}


