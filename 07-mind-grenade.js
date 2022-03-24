//La idea de este codigo es ver que los modulos que invoquen funciones se vana ejecutar per se
//incluso sin dar un export a esa funcion

const a = 5;
const b = 10

const sumNumbers = () => console.log(`the final number is ${a+b}`);

sumNumbers()