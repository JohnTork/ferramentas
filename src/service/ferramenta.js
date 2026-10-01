import Ferramenta from '../model/ferramenta.js'

class ServiceFerramenta {
    Buscar() {
        return Ferramenta.Buscar()
    }

    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }
        return Ferramenta.BuscarUm
    }

    Criar(nome) {
        if(!nome) {
            throw new Error("Favor informar o nome")
        }
        Pessoa.Criar(nome)
    }

    Alterar(id, nome) {
        if(!id || isNaN(id) || !nome) {
            throw new Error("Favor informar todos os dados")
        }
        Ferramenta.Alterar(id, nome)
    }

    Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o Id corretamente")
        }
        Ferramenta.Deletar(id)
    }
}

export default new ServiceFerramenta()