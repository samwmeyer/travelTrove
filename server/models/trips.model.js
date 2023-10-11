const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: [ true, "Name is required" ],
        minLength: [ 2, "Name must be at least 2 characters" ]
    },

    length: {
        type: String,
        required: [ true, "Length is required" ],
        min: [ 1, "Length must be greater than 0" ],
        },
    
    destination: {
        type: String,
        required: [ true, "Destination is required" ]
    }

}, {timestamps: true})

const Trip = mongoose.model("Trip", TripSchema);
module.exports = Trip;