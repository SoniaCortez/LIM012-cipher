import cipher from './cipher.js';
//botones de codificar y decodificar*/
const codiBtn = document.getElementById('boton1');
const texto1 = document.getElementById('caja1');
const texto2 = document.getElementById('caja2');
const desplazar = document.getElementById('offset');

codiBtn.addEventListener('click',()=> {
  let box1 = texto1.value;
  //capturando valor del boton de desplazmiento*/
  let box3 = desplazar.value;
  let box2 = texto2;
  box2.value = box1.toUpperCase();
});

const decoBtn = document.getElementById('boton2');
decoBtn.addEventListener('click',()=> {
  let box1 = texto1.value;
  let box3 = desplazar.value;
  let box2 = texto2;
  box2.value = box1.toUpperCase();
  console.log(box3);
});
console.log(cipher);

const llamado = cipher.encode()
console.log(llamado);
