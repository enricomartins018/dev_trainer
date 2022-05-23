class ModelCep {
    constructor() {
    this._cep = ''
    this._estado = ''
    this._cidade = ''
    this._bairro = ''
    this._rua = ''
    this._complemento = ''
    }
    
    requisicaoApi() {
        const cepInput = $('#inputCep').val()
        if (this.validaCep() == true) {
            const request = new XMLHttpRequest()
            request.addEventListener( "load", () =>
            {
                if ( request.status == 200 )
                {
                    const resultado = this._processaResponse(request.responseText)
                    this._atualiza(resultado);
                }
            })
            request.open( "GET", `https://viacep.com.br/ws/${cepInput}/json/`, false );
            request.send();
            } else {
            // TODO: VIEW -> Mostrar na tela mensagem de CEP inválido
        }
        }

    validaCep() {
    const cepInput = $('#inputCep').val()
    if (cepInput.length == 8) {
        return true
    } else {
        return false
    }
    }

    _processaResponse(responseString)
        {
            const response = JSON.parse(responseString);
            return response;
        }

    _atualiza (resultado) {
        this._cep = resultado.cep
        this._estado = resultado.uf
        this._cidade = resultado.localidade
        this._bairro = resultado.bairro
        this._rua = resultado.logradouro
        this._complemento = resultado.complemento
    }

    getCep() {
        return this._cep
    }

    getEstado() {
        return this._estado
    }

    getCidade() {
        return this._cidade
    }

    getBairro() {
        return this._bairro
    }

    getRua() {
        return this._rua
    }

    getComplemento() {
        return this._complemento
    }
}