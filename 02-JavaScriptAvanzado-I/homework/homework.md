# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un
> valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   //
   var x = 10;
   console.log(x); // 10
   console.log(a); // 8
   var f = function (a, b, c) {
      b = a;
      console.log(b); // 8
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); // 9
};

c(8, 9, 10);
console.log(b); // 10
console.log(x); // 1
```

```javascript
console.log(bar); // undefined
console.log(baz); // undefined
foo(); // "Hola"
function foo() {
   console.log("Hola!");
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if (true) {
   var instructor = "Franco";
}
console.log(instructor); // "Franco"
```

```javascript
var instructor = "Tony";
console.log(instructor); // "Tony"
(function () {
   if (true) {
      var instructor = "Franco";
      console.log(instructor); // "Franco"
   }
})();
console.log(instructor); // "Tony"
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
   var instructor = "The Flash";
   let pm = "Reverse Flash";
   console.log(instructor); //"The Flash"
   console.log(pm);// "Reverse Flash"
}
console.log(instructor); // "The Flash"
console.log(pm); // "Franco"
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 // 2
"4px" - 2 //NaN
7 / 0 // NaN
{}[0] // [0]
parseInt("09") //9
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] //NaN   
3>2>1 // true
[] == ![] // false
```

> Si te quedó alguna duda repasá con
> [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); //undefined

   console.log(foo()); //2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```
Esto porque la varible a hizo Hoisting, pero se imprime antes de asignarle un valor
O sea, el contexto global la guardó y sabe que existe, pero al momento en que se llama 
Pues no tiene ningún valor asignado
Las funciones directamente hacen Hoisting, pero estas pueden ser ejecutadas en cualquier parte del 
Código, ya que el Hoistin guarda a la función completa y ya al invocarla solo 
La saca para que se ejecute
 

Y el de este código? :

```javascript
var snack = "Meow Mix";

function getFood(food) {
   if (food) {
      var snack = "Friskies";
      return snack;
   }
   return snack;
}

getFood(false); // undefined
```
En este directamente la variable var no existe en ese contexto de ejecución

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = "Juan Perez"; 
var obj = {
   fullname: "Natalia Nerea",
   prop: {
      fullname: "Aurelio De Rosa",
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // "Aurelio De Rosa"

var test = obj.prop.getFullname;

console.log(test()); // "Juan Perez"
```
//This hace referencia al Objeto, entonces al colocar this.fullname, esta haciendo referencia al nombre
del objeto padre.

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);//1
   setTimeout(function () {
      console.log(2);
   }, 1000);/////2
   setTimeout(function () {
      console.log(3);
   }, 0);////3
   console.log(4);///4
}

printing();
```
Bueno, aqui es evidente, al ponerle un retraso a los demás, 
Pues obviamente tardan mas en ejecutarse.
