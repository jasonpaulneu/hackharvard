import * as ActionService from '../services/Action-service.js';

export const createAction = (req,res) =>{
       const payload = req.body;
       ActionService.createAction(payload).then((action)=>{
        res.status(201);
        res.json(action);
       }).catch(e=>{
        res.status(500);
        res.json(e);
       }
        )
    };

//TODO: has to be authenticated
export const fetchHistoricActions = (req,res) =>{
    const by_userId = req.params.by_userId;
    const flight_number = req.query.flight_number;
    const departure_dateTime = req.query.departure_dateTime;

    const filter ={};

    if(flight_number){
        filter.flight_number=flight_number;
    }
    if(departure_dateTime){
        filter.departure_dateTime=departure_dateTime;
    }

    ActionService.fetchHistoricActions(by_userId,filter).then((actions)=>{
        res.status(200);
        res.json(actions)
    }).catch(e=>{
        res.status(500);
        res.json(e);
    })
}

//TODO: has to be authenticated
export const fetchLikesForUser = (req,res) =>{
    const for_userId = req.params.for_userId;
    const flight_number = req.query.flight_number;
    const departure_dateTime = req.query.departure_dateTime;

    const filter ={};

    if(flight_number){
        filter.flight_number=flight_number;
    }
    if(departure_dateTime){
        filter.departure_dateTime=departure_dateTime;
    }

    ActionService.fetchLikesForUser(for_userId,filter).then((actions)=>{
        res.status(200);
        res.json(actions)
    }).catch(e=>{
        res.status(500);
        res.json(e);
    })
}

