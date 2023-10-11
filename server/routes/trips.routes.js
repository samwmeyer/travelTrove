const TripController = require ("../controllers/trips.controller")

module.exports = (app) => {
    app.post( "/api/trips", TripController.addTrip )
    app.get( "/api/trips", TripController.getAllTrips)
    app.get( '/api/trips/:id', TripController.getOneTrip)
    app.patch('/api/trips/:id', TripController.updateTrip)
    app.delete('/api/trips/:id', TripController.deleteTrip);
}