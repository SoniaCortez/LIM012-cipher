import cipher from './cipher.js';
/*botones de codificar y decodificar*/
const codiBtn = document.getElementById('boton1');
const texto1 = document.getElementById('caja1');
const texto2 = document.getElementById('caja2');
const desplazar = document.getElementById('offset');

codiBtn.addEventListener('click',()=> {
  let box1 = texto1.value;
  /*capturando valor del boton de desplazmiento. Utilizar parseint para que sea numero*/
  let box3 = parseInt(desplazar.value);
  let box2 = texto2;
  /*en la caja 2 va el resultado encriptado, por eso afrego aqui mi funcion*/
  box2.value = cipher.encode(box3, box1);
});

const decoBtn = document.getElementById('boton2');
decoBtn.addEventListener('click',()=> {
  let box1 = texto1.value;
  let box3 = parseInt(desplazar.value);
  let box2 = texto2;
  box2.value = cipher.decode(box3, box1);
  //console.log(box3);//
});
//console.log(cipher);//
