class CepController {

    constructor(form) {
        this.form = document.getElementById(form)
        this.inputCep = document.getElementById('cep');
        this.output = document.getElementById('retorno');
        this.img = `<img src="../public/assets/loading1.gif" height="100">`
        this.onSubmit();

        this.count = 0
    }

    onSubmit() {

        this.form.addEventListener('submit', e => {
            this.output.innerHTML = this.img
            e.preventDefault();

            let cep = this.inputCep.value

            this.getCep(cep)
            this.count = cep.length - 1
        })
    } // onSubmit

    async getCep(cep) {

        try {

            const response = await this.rotaServer(cep)
            const data = await response.json()

            if (data.erro) {

                throw 'Cep não encontrado!';

            } else if (response.status == 404) {

                return this.output.innerHTML = 'Erro na Api tente novamente mais tarde';
            }

            let value = this.getValues(data)

            this.showCep(value)


        } catch (error) {

            console.log('Erro no Catch ' + cep)
            this.newShowCep(cep)

        }


    } // getCep

    rotaServer(cep) {
        return fetch(`http://localhost:4000/api/${cep}`)
    } // rotaServer

    showCep(data) {
        return this.output.innerHTML = `
        CEP: ${data._cep}
        <br/>RUA: ${(data._logradouro) ? data._logradouro : '...'}
        <br/>BAIRRO: ${(data._bairro) ? data._bairro : '...'}
        <br/>CIDADE: ${(data._localidade) ? data._localidade : '...'}
        <br/>ESTADO:  ${(data._uf) ? data._uf : '...'}`;

    } //mostraCep
    newShowCep(cep) {

        let str = cep.split('');
        str[this.count] = 0
        this.inputCep.value = str.join('')
        this.count--
        this.checkCep(this.inputCep.value)

    } //newShowCep

    getValues(data) {

        return new Cep(
            data.cep,
            data.logradouro,
            data.bairro,
            data.localidade,
            data.uf

        )

    } // getValues

    checkCep(cep) {
        if (cep != 0) {
            this.getCep(cep)
        } else {
            return this.output.innerHTML = 'Por favor digite um CEP válido';
        }

    }
}