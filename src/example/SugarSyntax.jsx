//SpreadOperator

// Antes
const numeros = [1, 2, 3]
const nuevoNumeros = numeros.concat([4, 5, 6])
console.log(nuevoNumeros) // [1,2,3,4,5,6]

//Ahora
const nuevosNumerosSugar = [...numeros, 4, 5, 6, 7, 8, 9]


//Destructuring Array

//Antes
const colores = ['Rojo', 'Violeta', 'Verde']
const rojo = colores[0]

//Ahora
const [primero, segundo] = colores


//Destructuring Obj

//Antes 
const persona = {
    nombre: 'omar',
    ciudad: 'CABA',
    mail: 'lala@lala.com',
    edad: 35
}

const nombre = persona.nombre

//ahora
const { nombre: userName, ciudad, edad } = persona

//Operador Ternario

//Antes
let mensaje;

if (edad > 18) {
    mensaje = 'Ya podes ir al casino'
} else {
    mensaje = 'Anda a tomar la leche'
}

//Ahora

const mensajeSugar = edad > 18 ? ' Ya podes ir al casino ' : 'Anda a tomar la leche'

//Arrow Function

//Antes
function sumar(a, b) {
    return a + b
}

//ahora
const sumarArrow = (a, b) => {
    return a + b
}

const sumarSugar = (a, b) => a + b