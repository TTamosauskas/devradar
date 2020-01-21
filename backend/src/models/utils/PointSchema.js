const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
    type:{
        type:String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type:[Number],
        requires: true,
    },
})

module.exports = PointSchema;