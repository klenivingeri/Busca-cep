var form = document.getElementById('formulario');
var c = document.getElementById('campo');
var output = document.getElementById('retorno');

var count = 7
const img =`<img src="../public/assets/loading1.gif" height="100">`



form.addEventListener('submit', function(e) {
    
    output.innerHTML = img
    

    async function getCep(cep){


        try{
            const response = await rotaServer(cep)
            const data = await response.json()
            console.log(response.status)
            
            if(data.erro){             
                throw 'Cep não encontrado!';
            }else if(response.status ==  404 ){
                return output.innerHTML = 'Por favor digite um CEP válido';
            }

            mostraCep(data)
        }catch (error){          
            novabusca(cep)
        }
    }
    getCep(c.value)
    e.preventDefault();
});

const rotaServer = (cep)=>{
    return fetch(`http://localhost:4000/api/${cep}`)
}

const mostraCep = (data) =>{
    count = 7
   return output.innerHTML = `
    CEP: ${data.cep}
    <br/>RUA: ${data.logradouro}
    <br/>BAIRRO: ${data.bairro}
    <br/>CIDADE: ${data.localidade}
    <br/>ESTADO:  ${data.uf}`;
    
}

const  novabusca = (cep) =>{
        
        var str = cep.split('');
        str[count] = 0
        c.value = str.join('')
        count--
        verificaCep(c.value)
}

async function verificaCep(cep){
    try{

        const response = await rotaServer(cep)
        const data = await response.json()
        if(data.erro){
            if(cep == 0){             
                return output.innerHTML = 'CEP não encontrado!';
            }
            return novabusca(cep)     
               
        }

        mostraCep(data)
    }catch (error){             
        output.innerHTML = 'Ops, algo aconteceu, tente novamente mais tarde!'
    }
}

