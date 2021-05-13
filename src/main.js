var form = document.getElementById('formulario');
var c = document.getElementById('campo');
output = document.getElementById('retorno');
var salvaCep = ''
var count = 8


form.addEventListener('submit', function(e) {
    
    output.innerHTML = `<img src="../public/assets/loading1.gif" height="100">`
    

    async function getCep(cep){
        console.log(cep)

        try{
            const response = await rotaServer(cep)
            const data = await response.json()
            
            console.log(data)
            if(data.erro){             
                throw 'Cep não encontrado!';
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
    return fetch(`http://localhost:4000/localiza/${cep}`)
}

const mostraCep = (data) =>{
    count = 8
    c.value = data.cep.replace('-','')
    output.innerHTML = `
    CEP: ${data.cep}
    <br/>RUA: ${data.logradouro}
    <br/>BAIRRO: ${data.bairro}
    <br/>CIDADE: ${data.localidade}
    <br/>ESTADO:  ${data.uf}`;
}

const  novabusca = (cep) =>{
        count--
        c.value = '0'
        var str = cep.split('');
        str[count] = 0
        c.value = str.join('')
        salvaCep = c.value
        
        verificaCep(salvaCep)
}

async function verificaCep(cep){
    try{
        const response = await rotaServer(cep)
        const data = await response.json()
        console.log(response)
        if(data.erro){
            novabusca(cep)     
            return output.innerHTML = 'CEP não localizado'      
        }
        mostraCep(data)
    }catch (error){             
        output.innerHTML = 'Ops, algo aconteceu, tente novamente mais tarde!'
    }
}

