const validateCreateFlight = (req, res, next) => {

    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ) {
        return res.status(400).json({
            data: {},
            success: false,
            message: "Incoming invalid req body for create flight",
            error: "Missing mandatory properties to create flight"
        });
    }

    next();
}

module.exports = {
    validateCreateFlight
}