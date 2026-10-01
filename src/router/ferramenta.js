const nomes = new Array("M", "", "")

class Ferramenta {
    Buscar() {
        return nomes
    }

    BuscarUm(id) {
        return nomes[id]
    }

    Criar(nome) {
        nomes.push(nome)
    }

    Alterar(id, nome) {
        nome[id] = nome
    }

    Deletar(id) {
        nomes.splice(id, 1)
    }
}

export default new Ferramenta()