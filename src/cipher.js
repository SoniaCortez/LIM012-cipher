const cipher = {
  encode : (numero, palabras) => {
    let letters = palabras;
  /*variable vacia para establecer mas adelante que voy a almacenar*/
  let blockLetters = '';
  /*variable para desplazamiento elegido*/
  let desplazamiento = numero;
  /*aplico for para que se ejecute un bucle o ciclo repetitivo*/
  for(let i = 0; i<letters.length ; i++){
    /*obtener el codigo ASCII*/
    let ascii = letters.charCodeAt(i)
    /*aplico condicionante para espacios vacios*/
    if(ascii == 32){
      blockLetters += ' ';
      /*if para condicion, mayusculas*/
    }else if(ascii>=65 && ascii<=90){
      /*aplicar algoritmo para obtener la nueva posicion ASCII*/
      let newPlace = (ascii-65+desplazamiento)%26+65;
      /*convertir el ASCII en mi alfabeto. Entre parentesis va el nuevo codigo ASCII obtenida con mi formula*/
      let alfabeto = String.fromCharCode(newPlace);
      /*establezco lo que va en la variable vacia letrasUnidas, que es lo que quiero que se almacene*/
      blockLetters = blockLetters + alfabeto;
      //console.log(alfabeto)//
      /*else if para condicionar las minusculas*/
    }else if(ascii>=97 && ascii<=122){
      let newPlace = (ascii-97+desplazamiento)%26+97;
      let alfabeto = String.fromCharCode(newPlace);
      blockLetters = blockLetters + alfabeto;
      /*si nada se cumple entonces reconoce los simbolos y le da la misma posicion*/
    }else{
      let newPlace = ascii;
      let alfabeto = String.fromCharCode(newPlace);
      blockLetters = blockLetters + alfabeto
   }
  }
  return blockLetters
},

 decode: function(numero, palabras){

  let letters = palabras;
  let blockLetters = '';
  let desplazamiento = numero;
  for(let i = 0; i<letters.length ; i++){

    let ascii = letters.charCodeAt(i);
    if(ascii == 32){
      blockLetters += ' ';
    }else if(ascii<=90 && ascii>=65){
      let newPlace = (ascii-90-desplazamiento)%26+90;
      let alfabeto = String.fromCharCode(newPlace);
      blockLetters = blockLetters + alfabeto;
    }else if(ascii<=122 && ascii>=97){
      let newPlace = (ascii-122-desplazamiento)%26+122;
      let alfabeto = String.fromCharCode(newPlace);
      blockLetters = blockLetters + alfabeto;
    }else{
      let newPlace = ascii;
      let alfabeto = String.fromCharCode(newPlace);
      blockLetters = blockLetters + alfabeto
   }
  }
  return blockLetters
  }
};
export default cipher;
