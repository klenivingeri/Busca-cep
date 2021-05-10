var form = document.getElementById('formulario');
var c = document.getElementById('campo');

form.addEventListener('submit', function(e) {

    async function getCep(){
        try{
            const response = await fetch(`http://localhost:4000/${c.value}`)
            const data = await response.json()
            console.log(data)
            mostraCep(data)
        }catch (error){
            console.log(error, 'errouuuu')
        }
    }

    getCep()

 
    
    const mostraCep = (en) =>{
        output = document.getElementById('retorno');
        output.innerHTML = `
        CEP: ${en.cep}
        <br/>RUA:
        <br/>BAIRRO:
        <br/>CIDADE:
        <br/>ESTADO: `;
    }












    // impede o envio do form
    e.preventDefault();
});