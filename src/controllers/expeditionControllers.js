import Expedition from '../models/expeditionModel.js'

export const store = async (req, res) => {
    try{
        const expedition = await Expedition.create(req, body)
        return res.status(200).json(expedition)
    }catch{
        return res.status(400).json({message: erro.message})
    }
}

export const index = async (req,res) => {
    try{
        const expeditions  = await Expedition.find().exec()
        return res.status(200).json(expeditions)
    }catch{
        return res.status(400).json({message: erro.message})
    }
}

export const update = async (req, res) => {
    try{
        const expedition = await Expedition.findByIdUpdate (req.params.id, res.body).exec()
        return res.status(200).json(expedition)
    }catch{
        return res.status(400).json({message: erro.menssage})
    }
}

export const destroy = async (req, res) => {
    try{
        const expedition = await Expedition.findByIdDelete (req.params.id).exec()
        return res.status(200).json(expedition)
    }catch{
        return res.status(400).json({message: erro.menssage})
    }
}
