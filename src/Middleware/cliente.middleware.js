const { number } = require("joi");
const {Clientes} = require("../db/models")

const validarExisteClientePorDni =  async (req, res, next) => {
 try{   
    const dni = req.body.dni;
    
    const cliente = await Clientes.findOne({where: {dni}, order: [
        ['dni', 'ASC']]})
    if(cliente){
        return res.status(400).json({error: 'El dni ' + dni + ' ya se encuentra registrado'})
    }
    next()
}catch(error){return res.status(400).json({error: 'Valor erroneo dni'})}  
}


const existeClientePorId=  async (req, res, next) => {
    const id = req.params.id; 
try{       
    const cliente = await Clientes.findByPk(id)
    if(!cliente){
        return res.status(400).json({error: 'El id ' + id + ' no se encuentra registrado'})
    }
    next()
}catch(error){return res.status(400).json({error: 'Valor ingresado erroneo'})}
}



const validarNoExisteClientePorDni =  async (req, res, next) => {
 //try{   
    const dni = req.body.dni;    
    const existecli = await Clientes.findOne({where: {dni}, order: [
        ['dni', 'ASC']]})
    if(!existecli){
        return res.status(400).json({error: 'El cliente dni ' + dni + ' no existe'})
    }
    req.existecli = existecli;
    next()

//    }catch(error){return res.status(400).json({error: 'Valor dni ingresado erroneo'})}
}


const validarNoExisteClientePorDni2 =  async (req, res, next) => {
    const dni = req.params.dni;  
 //try{   
    const existecli = await Clientes.findOne({where: {dni}, order: [
        ['dni', 'ASC']]})
    if(!existecli){
        return res.status(400).json({error: 'El cliente dni ' + dni + ' no existe'})
    }
    req.existecli = existecli;
    next()

 //   }catch(error){return res.status(400).json({error: 'Valor dni ingresado erroneo'})}
}





module.exports = { validarNoExisteClientePorDni2,validarExisteClientePorDni, existeClientePorId,validarNoExisteClientePorDni}