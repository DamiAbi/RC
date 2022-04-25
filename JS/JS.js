alert ( "Un mensaje")
document.write( "Hello world")
document.write ( 3+5)


//numero aleatorio

console.log(Math.ceil(Math.random() * 50));

let aleatorio= 44


//Raiz cuadrada
console.log(`La raiz cuadrada de 44 es ${Math.sqrt(aleatorio)}`);

//Elevar un número a una potencia

let exponente = 5;

console.log(
  `El número ${aleatorio} elevado a la potencia ${exponente} es de ${Math.pow(
    aleatorio,
    exponente
  )}`
);

//Num. máximo
console.log(
    `El número máximo de la lista es ${Math.max(
        120,250,78,96,-38,45.72,1450,2380
    )} `
  );
  //num. minimo

  console.log(
    `El número mínimo de la lista es ${Math.min(
        120,250,78,96,-38,45.72,1450,2380
    )}`
  );

  //Dos decimales
  let numero=45.895025
  let numero2=56.788789
  let numero3=78.413582
  console.log(Math.round(numero * 100) / 100);
  console.log(Math.round(numero2 * 100) / 100);
  
  console.log(Math.round(numero3 * 100) / 100);

  //redondeo
  
  console.log(`El número ${numero} redondeado es ${Math.round(numero)}`);
  console.log(`El número ${numero2} redondeado  es ${Math.round(numero2)}`);
  console.log(`El número ${numero3} redondeado es ${Math.round(numero3)}`);

//6
  let n1 = prompt("Escribe un número");
let n2 = prompt("Escribe otro número");
if (n1 > n2) {
document.write(n1);
} else {
document.write(n2);
}

//7
let num1 = prompt("Escribe un número");
let num2 = prompt("Escribe otro número");
let num3 = prompt("Escribe otro número");
if (num1 > num2 && num1 > num3) {
document.write(num1);
} else if (num2 > num3) {
document.write(num2);
} else {
document.write(num3);
}
//8
let nu1 = prompt("Escribe un número");
if (nu1 % 2 === 0) {
document.write("Es divisible por 2");
} else {
document.write("No es divisible por 2");
}

//9
let text = prompt("Escribe una frase");
  let nText = text.length;
  let i;
  for (i = 0; i < nText; i++) {
  if (text.substr(i,1) === "a" || text.substr(i,1) === "e" || text.substr(i,1) === "i" || text.substr(i,1) === "o" || text.substr(i,1) === "u") {
  document.write(text.substr(i,1));
  }
  }
  //10
let numero1 = prompt("Escribe un número");
if (numero1 % 2 === 0 || numero1 % 3 === 0 || numer1 % 5 === 0 || numero1 % 7 === 0) {
document.write("Es divisible por 2, 3, 5 o 7");
} else {
document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}

//11

let nro1 = prompt("Escribe un número");
if (nro1 % 2 === 0 || nro1 % 3 === 0 || nro1 % 5 === 0 || nro1 % 7 === 0) {
if (nro1 % 2 === 0) {
document.write("Es divisible por 2. ");
}
if (nro1 % 3 === 0) {
document.write("Es divisible por 3. ");
}
if (nro1 % 5 === 0) {
document.write("Es divisible por 5. ");
}
if (nro1 % 7 === 0) {
document.write("Es divisible por 7. ");
}
} else {
document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}

// TAREA 25 DE ABRIL


let peliculas = [
  {
    título: "Harry Potter y las reliquias de la muerte parte 2",
    género: "Fantasía",
    anio: "2011",
    sinapsis:
   "Un enfrentamiento entre el bien y el mal espera cuando el joven Harry (Daniel Radcliffe), Ron (Rupert Grint) y Hermione (Emma Watson) se preparan para una última batalla en contra de Lord Voldemort (Ralph Fiennes). Harry se ha convertido en un joven fuerte que tiene la misión de librar al mundo del mal."  },
  {
    título: "Encanto",
    género: "Infantil",
    anio: "2021",
    sinapsis:
      "Una joven colombiana puede ser la última esperanza para su familia, cuando descubre que la magia que rodea a Encanto, un lugar encantado que bendice a los niños con dones únicos, se encuentra en serio peligro",
  },
  {
    título: "Batman",
    género: "Fantasía",
    anio: "2022",
    sinapsis:
      "En su segundo año luchando contra el crimen, Batman explora la corrupción existente en la ciudad de Gotham y el vínculo de esta con su propia familia. Además, entrará en conflicto con un asesino en serie.",
  },
];

function obtDetalles() {
  document.write(
    "<b>------------------------Cartelera------------------------</b><br/><br/>"
  );
  for (let i = 0; i < peliculas.length; i++) {
    document.write(`<b>Título:</b> ${peliculas[i].título}<br/>`);
    document.write(`<b>Género:</b> ${peliculas[i].género}<br/>`);
    document.write(`<b>Año:</b> ${peliculas[i].anio}<br/>`);
    document.write(`<b>Sinápsis:</b> ${peliculas[i].sinapsis}<br/><br/>`);
  }
}



  
