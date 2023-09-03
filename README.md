# PreEntrega1Perdomo - Curso JavaScript CODERHOUSE

Calculadora de raices de un polinomio de segundo grado.
Funciona a partir de las sig. propiedades:
  Si el discriminante (en el codigo 'disc') es positivo o nulo las raices serán distintas o iguales respectivamente y serán reales para ambos casos.
  Si el discriminante es negativo el polinomio tendrá dos raíces imaginarias distintas representado de la forma x (+/-) i*y.

Los cálculos a partir de los distintos casos son los sig.:
  Discriminante positivo:
    x1 = (-b + (raiz cuadrada de disc)) / (2 * a);
    x2 = (-b - (raiz cuadrada de disc)) / (2 * a); 
  Discriminante nulo:
    x1 = x2 = (-b +/- (raiz cuadrada de disc)) / (2 * a) = (-b +/- (0)) / (2 * a) = -b  / (2 * a)
  Discriminante negativo:
    Como el discriminante es negativo y no existe la raiz cuadrada de un negativo, primeramente hacemos -(disc)
    Luego por una parte se calcula x1 = -b  / (2 * a) y por otra y = (raiz cuadrada de disc) / (2 * a).
    Así se obtiene raíz compleja 1:  x + i*y, y raiz compleja 2: x - i*y.
