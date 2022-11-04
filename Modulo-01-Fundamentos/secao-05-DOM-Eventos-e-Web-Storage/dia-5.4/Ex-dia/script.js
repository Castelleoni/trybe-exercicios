window.onload = function(){
    let selectFundo = document.querySelectorAll('select')[0];
    selectFundo.addEventListener('change', function(){
        let selecionado = selectFundo.selectedOptions[0];
        document.body.style.backgroundColor = selecionado.value;
    })

    let selectTexto = document.querySelectorAll('select')[1];
    selectTexto.addEventListener('change', function(){
        let selecionado = selectTexto.selectedOptions[0];
        document.body.style.color = selecionado.value;
    })



}