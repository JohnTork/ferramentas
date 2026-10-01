import ServiceFerramenta from '../service/ferramenta.js'

class ControllerFerramenta {
    Buscar(req, res) {
        try {
            const nome = ServiceFerramenta.Buscar()
            res.sen({ nomes })
        } catch (e) {
            res.send({ message: e.message})
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const nome = ServiceFerramenta.BuscarUm(id)

            res.send ({ message})
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Criar(req, res) {
        try {
            
        }
    }
}