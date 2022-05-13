const textoAEncriptar = document.querySelector(".texto-a-encriptar");
const mensaje = document.querySelector(".mensaje-codificado");

//BOTON Y FUNCION PARA ENCRIPTAR 
function btnEncriptar(){
    const textoEncriptado = encriptar(textoAEncriptar.value);
    mensaje.value = textoEncriptado;
}

function encriptar(stringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringParaEncriptar.includes(matrizCodigo[i][0])){
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringParaEncriptar;
}

//BOTON Y FUNCION PARA DESENCRIPTAR

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textoAEncriptar.value)
    mensaje.value = textoDesencriptado;
}

function desencriptar(stringParaDesencriptar){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    stringParaDesencriptar = stringParaDesencriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringParaDesencriptar.includes(matrizCodigo[i][0])){
            stringParaDesencriptar = stringParaDesencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringParaDesencriptar;
}

//FUNCION COPIAR
function btnCopiar(){
    mensaje.select();
    document.execCommand('copy');
}
