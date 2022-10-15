import * as PassengerService from '../services/Passenger-service.js';

export const createPassenger = (req,res) =>{
       const payload = req.body;
       PassengerService.createPassenger(payload).then((passenger)=>{
        res.status(201);
        res.json(passenger);
       }).catch(e=>{
        res.status(500);
        res.json(e);
       }
        )
    };

export const updatePassenger = (req,res)=>{
    const id = req.params.id;
    const payload = req.body;
    PassengerService.updatePassenger(id,payload).then((passenger)=>{
        res.status(200);
        res.json(passenger);
    }).catch(e=>{
        res.status(500);
        res.json(e);
    }
    )
}

export const deletePassenger = (req,res) =>{
    const id = req.params.id;
    PassengerService.deletePassenger(id).then((result)=>{
        res.sendStatus(204);
    }).catch(e=>{
        res.status(500);
        res.json(e);
    })
}

export const fetchPassengersForUser = (req,res) =>{
    const userId = req.query.userId;
    PassengerService.fetchPassengersForUser(userId).then((passengers)=>{
        res.status(200);
        res.json(passengers)
    }).catch(e=>{
        res.status(500);
        res.json(e);
    })
}

