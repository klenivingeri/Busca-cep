var form = document.getElementById('formulario');
var c = document.getElementById('campo');
output = document.getElementById('retorno');




form.addEventListener('submit', function(e) {


    async function getCep(){
 

        try{
            const response = await fetch(`http://localhost:4000/${c.value}`)
            const data = await response.json()

            console.log(data)
            if(data.erro){
                while(c.value.length <= 7){
                    c.value = c.value + '0'
                }
            return output.innerHTML = 'CEP não localizado.'
             
            }

            mostraCep(data)
        }catch (error){
            console.log(error, 'errouuuu')
        }
    }

    getCep()
 
    
    const mostraCep = (data) =>{
        c.value = data.cep
        output.innerHTML = `
        CEP: ${data.cep}
        <br/>RUA: ${data.logradouro}
        <br/>BAIRRO: ${data.bairro}
        <br/>CIDADE: ${data.localidade}
        <br/>ESTADO:  ${data.uf}`;
    }












    // impede o envio do form
    e.preventDefault();
});

