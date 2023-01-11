//Importando a biblioteca validator
import validator from 'validator';
import "./style.css";

//Selecionando os campos pelos ids 
const campoDeTexto = document.querySelector('#value');
const botao = document.querySelector('#button');
const seletor = document.querySelector('#option');
const textoDeSaida = document.querySelector('#answer');

const UUID_VERSION = 4

botao.addEventListener('click', (event) => {

    // Usamos o preventDefault() para evitar que o botao recarregue a pagina
    event.preventDefault();
    
    //Aqui vamos validar se o que é informado esta correto por meio do validator
    const campos = {
        cpf: validator.isTaxID(campoDeTexto.ariaValueMax, 'pt-BR'),
        hexColor: validator.isHexColor(campoDeTexto.value),
        email: validator.isEmail(campoDeTexto.value),
        uuid: validator.isUUID(campoDeTexto.value, UUID_VERSION),
        url: validator.isURL(campoDeTexto.value),
    };


    textoDeSaida.innerHTML = `A validação retornou ${campos[seletor.value]}`;

});
