import Passenger from '../models/Passenger.js';

export const fetchPassengersInFlight = async (flight_number, departure_dateTime) =>{
    const passengers = await Passenger.findAll({
        where:{
            flight_number,
            departure_dateTime
        }
    })
    return passengers;
}