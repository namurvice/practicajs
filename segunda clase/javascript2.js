/*
let nombre = juan;
let num = 2;

console.log(nombre);
alert("el numero es " + num);

*/

//este es el "si, entonces"
let edad = Number(prompt("ingrese edad"));

if (edad<18){
    alert("es menor de edad");
}else{
    alert("es mayor de edad");
}

//este es el mientras
let i = 1;
while(i<=10){
    console.log(i);
    //i = i + 1; es igual a i++;
    i++;
    //i = i - 1 es igual a i--
}

i = 1;
do{
    console.log(i);
    i++;
}while(i<=10)

for(let i = 1; i <= 10; i++){
    document.writeln(i);
    //el ln agrega un espacio entre los números
}

