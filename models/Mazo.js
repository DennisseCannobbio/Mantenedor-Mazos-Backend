const { Schema, model} = require('mongoose');

const MazoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true,
        unique: true
    },
    colores: {
        type: String,
        required: true
    },
    calificacion: {
        type: String,
        required: true,
    },
    poseeForro: {
        type: Boolean,
        required: true,
    },
    estado: {
        type: String,
        required: true
    },
    img: {
        type: Buffer,
        required: false
    },
    tipo:{
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    planeswalker: {
        type: String,
        required: false
    }
})
module.exports = model('Mazo', MazoSchema);