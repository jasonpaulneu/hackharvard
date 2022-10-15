import Passenger from '../models/Passenger.js';

export const createPassenger = async (passenger) =>{
    const newPassenger = await Passenger.create(passenger);
    return newPassenger;
}

export const updatePassenger = async (id, update) =>{
    const passenger = await Passenger.findByPk(id);
    if(passenger === null){
        throw new Error('No passenger details found with that id');
    }
    const updatedPassenger = await passenger.update(update);
    return updatedPassenger;
}

export const deletePassenger = async (id) =>{
    const passenger = await Passenger.findByPk(id);
    if(passenger === null){
        throw new Error('No passenger details found with that id');
    }
    const count = await Passenger.destroy({
        where:{
            id
        }
    });
    return count;
}

export const fetchPassengersForUser = async (userId) =>{
    const passengers = await Passenger.findAll({
        where:{
            userId
        }
    })
    return passengers;
}