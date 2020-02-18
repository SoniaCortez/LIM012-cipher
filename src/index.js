import cipher from './cipher.js';

//boton de seleccion de desplazamiento*/
const desplaza= ()=>{
  seleccione('3, 4, 5, 6')
};
const btnInicio=document.getElementById('btn-desplazar');
btnInicio.addEventListener('click', desplaza)


//boton de codificar*/
const codiDeco= ()=>{
  codificar('btn-desplazar+ASCII')};

const btnCodi=document.getElementById('boton1');
btnCodi.addEventListener('click',codiDeco )

//boton decodificar*/
const decoCodi= ()=>{
  decodificar('btn-desplazar+ASCII')};

const btnDeco=document.getElementById('boton2');
btnDeco.addEventListener('click',decoCodi )

// boton limpiar
const reinicio= ()=>{
  eliminar('limpiar texto caja1 + caja2')
};
const btnEli=document.getElementById('boton3');
btnEli.addEventListener('click',reinicio)


//rescatando el valor del texto a codificar*/
const captura=document.getElementById ( "boton1" ) ;
captura.addEventListener ("click" , function ( ) {
let textEncode=document.getElementById ( "caja1" ) . valor ;
textEncode=textEncode.toUpperCase ( ) ;
let opciones=document . getElementById("btn-desplazar") . valor ;
document.getElementById("btn-desplazar") . innerHTML  =  ventana.cifrado.codificar(textEncode ,  opciones);
} ) ;

//rescatando el valor del texto a decodificar * /

//const  btn2  =  document . getElementById ( "boton2" ) ;
//btn2 . addEventListener ( "click" , function ( ) {
  //let  textDecode  =  document . getElementById ( "caja2" ) . valor ;
  //textDecode  =  textDecode . toUpperCase ( ) ;
  //let  opciones  =  document . getElementById ( "btn-desplazar" ) . valor ;
//  document . getElementById ( "btn-desplazar" ) . innerHTML  =  ventana . cifrado . decodificar ( textDecode ,  opciones ) ;
//} ) ;



console.log(cipher);
