const Marca = require('../models/Marca')

class MarcaController {

    static async listar(req, res) {
        let marcas = await Marca.findAll()
        console.log(marcas)
        res.render('marca/listar',{marcas:marcas})
    }
    static novo(req, res) {
        res.render('marca/novo')
        
    }
    static editar(req, res) {
        res.render('marca/editar')
    }
    static async salvar(req,res){
        let marca = new Marca()
        marca.nome = req.body.nome
        try {
            await marca.save()
            redirect('marca/listar')    
        } catch (error) {
            redirect('/marca/novo')
        }    
        
    }
    static async excluir(req,res){
        let id= req.params.id
        let marca = Marca.findByPk(id)
        await marca.destroy()   
    }
}
module.exports = MarcaController