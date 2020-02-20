const cipher = {
  encode: function(){

    let letras = 'murcielago';
    //variable vacia para establecer mas adelante que voy a almacenar//
    let letrasUnidas = '';
    //aplico for para que se ejecute un bucle o ciclo repetitivo//
    for(let i = 0; i<letras.length ; i++){
      //obtener el codigo ASCII//
      let ascii = letras.charCodeAt(i)
      //agrego el desplazamiento elegido//
      let desplazamiento = 5;
      //aplicar algoritmo para obtener la nueva posicion ASCII//
      let nuevaPosicion = (ascii-65+desplazamiento)%26+65;
      //convertir el ASCII en mi alfabeto. Entre parentesis va el nuevo codigo ASCII obtenida con mi formula//
      let alfabeto = String.fromCharCode(nuevaPosicion);
      //establezco lo que va en la variable vacia letrasUnidas, que es lo que quiero que se almacene//
      letrasUnidas = letrasUnidas + alfabeto;
      //console.log(alfabeto)
    };
    return letrasUnidas
  }
};
export default cipher;
