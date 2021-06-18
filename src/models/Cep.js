class Cep {
    constructor(cep, logradouro, bairro, localidade, uf){

    this._cep = cep;
    this._logradouro = logradouro;
    this._bairro = bairro;
    this._localidade = localidade;
    this._uf = uf;

    }
    get cep(){
        return this._cep;
    }
    get logradouro(){
        return this._logradouro;
    }
    get bairro(){
        return this._bairro;
    }
    get localidade(){
        return this._localidade;
    }
    get uf(){
        return this._uf;
    }
    set cep(value){
        this._cep = value
    }
    set logradouro(value){
        this._logradouro = value
    }
    set bairro(value){
        this._bairro = value
    }
    set localidade(value){
        this._localidade = value
    }
    set uf(value){
        this._uf = value
    }

}


