/* Dibujar los siguientes patrones ocupando document.write,
para rellenar los espacios vacíos se debe imprimir un espacio vacío. (Utiliza bucle for o while)
Cuadrado lleno:

*****
*****
*****
*****
*****

Pirámide Izquierda:

*    
**    
***  
****  
***** */

//cuadrado lleno

document.write("cuadrado lleno");
document.write("<br>");

for(let i = 1; i <= 5; i++){

    for(let j = 1; j <= 5; j++){
        document.write("*");
    }
    document.write("<br>");
}

document.write("<br>");

document.write("pirámide izquierda");
document.write("<br>");

//pirámide izquierda
for(let i = 1; i <= 5; i++){

    for(let j = 1; j <= i; j++){
        document.write("*");
    }
    document.write("<br>");
}



