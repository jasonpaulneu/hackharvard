import * as FetchPassengerService from '../services/FetchPassenger-service';

export const fetchPassengersInFlight = (req,res) =>{
    const flight_number = req.query.flight_number;
    FetchPassengerService.fetchPassengersForUser(flight_number).then((passengers)=>{
        res.status(200);
        res.json(passengers)
    }).catch(e=>{
        res.status(500);
        res.json(e);
    })
}

