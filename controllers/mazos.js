const { response } = require('express');
const Mazo = require('../models/Mazo')

const getAllMazos = async (req, res = response) => {
    try {
        const mazo = await Mazo.find();

        console.log(mazo)

        if(!mazo) {
            res.json({
                ok: false,
                estado: 2,
                data: mazo
            })
            return;
        }
        
        res.json({
            ok: true,
            estado: 2,
            data: mazo
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            error,
            estado: 3
        })
    }
}
module.exports = {
    getAllMazos
}