var form = document.getElementById('formulario');
var c = document.getElementById('campo');

form.addEventListener('submit', function(e) {

    retorno = document.getElementById('retorno');
    retorno.innerHTML = `CEP: ${c.value}`;
    

    // impede o envio do form
    e.preventDefault();
});