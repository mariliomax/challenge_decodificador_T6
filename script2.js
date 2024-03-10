const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const botaoCopiar = document.querySelector('.btn_copiar');





function btnEncriptar(){

    const textoDigitado = encriptar(textArea.value);
    mensagem.value =  textoDigitado; 
    textArea.value ="";
}


function encriptar(stringEncriptada){
    let matriz_code = [

        ['e','enter'],
        ['i','imes'],
        ['a','ai'],
        ['o','ober'],
        ['u','ufat']
    ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(i = 0; i < matriz_code.length; i++){
       if(stringEncriptada.includes(matriz_code[i][0])){
        stringEncriptada =  stringEncriptada.replaceAll(matriz_code[i][0], matriz_code[i][1]) 
       }

    
}
    return stringEncriptada;


 }

// função desencriptar

function btnDesencriptar(){

    const textoDigitado = Desencriptar(textArea.value);
    mensagem.value =  textoDigitado; 
    textArea.value = "";
}


function Desencriptar(stringDesencriptada){
    let matriz_code = [

        ['e','enter'],
        ['i','imes'],
        ['a','ai'],
        ['o','ober'],
        ['u','ufat']
    ];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(i = 0; i < matriz_code.length; i++){
       if(stringDesencriptada.includes(matriz_code[i][1])){
        stringDesencriptada =  stringDesencriptada.replaceAll(matriz_code[i][1], matriz_code[i][0]) 
       }

    
}
    return stringDesencriptada;


}






// Adicionar um ouvinte de evento para o clique no botão
botaoCopiar.addEventListener('click', function() {
  // Selecionar o texto dentro do textarea
  mensagem.select();
  // Copiar o texto selecionado
  document.execCommand('copy');
  
  // Feedback ao usuário
  alert('Texto copiado com sucesso!');
});


