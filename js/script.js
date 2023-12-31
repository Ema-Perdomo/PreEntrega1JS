//Calculadora de raices de un polinomio de segundo grado

alert("Calculadora de raices de un poolinomio de 2do grado de la forma ax^2 +/- bx +/- c");

//¡Error: Admite espacios como entrada!!!
function validarNumero(letra) {
    let num = prompt ("Ingrese " + letra);
    while (isNaN(num)) {
        alert("Por favor ingrese un tipo de datos valido(NUMERO)");
        num = prompt ("Ingrese " + letra);
    }
    return num
}
let a = validarNumero("a");
let b = validarNumero("b");
let c = validarNumero("c");

//Calculo discriminante
let disc = b * b - 4 * a * c;
console.log (disc); // Comprobrar calculos

//Inicializo
let x1 = 0;
let x2 = 0;


switch (true) {
    //Caso en el que hay dos raices reales 
    case 0 < disc  :
        x1 = (-b + Math.sqrt(disc)) / (2 * a);
        x2 = (-b - Math.sqrt(disc)) / (2 * a); 
        alert("Dos raices reales diferentes x1:" + x1.toFixed(2) + " y x2:" + x2.toFixed(2));            
        break;
    //Caso en el que hay solo una raiz real (raiz doble)
    case disc == 0 :  
        alert("Dos raices reales iguales: " + (-b / (2 * a)).toFixed(2));  
        break;

    case disc < 0 : // discriminante negativo
    // Caso en el que hay dos raices complejas.
        //Disc es negativo asi que se cambia el signo asi se puede calcular su raiz
        disc = -disc;
        x1 = -b / (2 * a);
        alert("Dos raices complejas diferentes: " + x1.toFixed(2) + " (+/-) i " + (Math.sqrt(disc) / (2 * a)).toFixed(2));
        break;
    default: 
        alert("Error");
        break;
}

// isNAN(valor) devuelve true si valor es no numerico
//isNaN() - if the value is a number, false is returned.
//The Math.sqrt() static method returns the square root of a number. 
