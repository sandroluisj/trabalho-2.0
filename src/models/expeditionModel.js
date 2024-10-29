import { Schema, model } from "mongoose"

const expeditionSchema = new Schema({
    location:  {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    participants: {
        type: [{ String }],
        required: true
    },
    speciesFound: {
        type: [{ String }],
        required: true
    },
})

export default model('Expedition', expeditionSchema)
