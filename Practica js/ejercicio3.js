
//alert de lo que hay que hacer
alert("ingresa un número, para que luego se sumen los antecesores hasta el número elegido");

//definir la variable N
let N = Number(prompt("ingrese N"));

//definir i
let i = 1;

//definir suma
let suma = 0;

//proceso de suma
i = 1;
while(i <= N){
    document.write(i);
    suma = i+suma;
    i++;
}

alert(suma);



