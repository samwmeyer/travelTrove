const Trip = require("../models/trips.model.js");

module.exports = {

    addTrip: ( req, res ) => {
        Trip
            .create( req.body )
            .then( newTrip => res.json(newTrip) )
            .catch( err => res.status(400).json(err) );
    },

    getAllTrips: ( req, res ) => {
        Trip
            .find( {} )
            .then( allTrips => res.json(allTrips) )
            .catch( err => res.status(400).json(err) )
    },

    getOneTrip: ( req, res ) => {
        Trip
            .findOne( { _id: req.params.id } )
            .then( Trip => res.json(Trip) )
            .catch( err => res.status(400).json(err) )
    },

    updateTrip: ( req, res ) => {
        Trip
            .findOneAndUpdate( { _id: req.params.id }, req.body, { new: true, runValidators: true } )
            .then( updatedTrip => res.json(updatedTrip) )
            .catch( err => res.status(400).json(err) )
    },

    deleteTrip: ( req, res ) => {
        Trip
            .deleteOne( { _id: req.params.id } )
            .then( deleteConfirmation => res.json(deleteConfirmation) )
            .catch( err => res.status(400).json(err) )
    }

}