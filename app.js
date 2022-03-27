// started operating system process
console.log('first')
setTimeout(() => {
  console.log('second')
}, 0)
console.log('third')
// completed and exited operating system process

//importante pensar porque el orden que obtenes en la consola. por mas que diga de esperar 0 segundos, igual se ejecuta la tercera accion
//esto es lo mas importante de entender. La segunda accion pasa a estar en segundo plano antes de que se ejecute la tercera