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
