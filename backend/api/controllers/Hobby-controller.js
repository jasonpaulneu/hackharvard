import * as HobbyService from '../services/Hobby-service.js';

export const createHobby = (req,res) =>{
       const payload = req.body;
       HobbyService.createHobby(payload).then((hobby)=>{
        res.status(201);
        res.json(hobby);
       }).catch(e=>{
        res.status(500);
        res.json(e);
       }
        )
    };

export const updateHobby = (req,res)=>{
    const id = req.params.id;
    const payload = req.body;
    HobbyService.updateHobby(id,payload).then((hobby)=>{
        res.status(200);
        res.json(hobby);
    }).catch(e=>{
        res.status(500);
        res.json(e);
    }
    )
}

export const deleteHobby = (req,res) =>{
    const id = req.params.id;
    HobbyService.deleteHobby(id).then((result)=>{
        res.sendStatus(204);
    }).catch(e=>{
        res.status(500);
        res.json(e);
    })
}

export const getHobby = (req,res) =>{
    const id = req.params.id;
    HobbyService.getHobby(id).then((hobby)=>{
        res.status(200);
        res.json(hobby)
    }).catch(e=>{
        res.status(500);
        res.json(e);
    })
}

export const fetchHobbiesForUser = (req,res) =>{
    const userId = req.query.userId;
    HobbyService.fetchHobbiesForUser(userId).then((hobbies)=>{
        res.status(200);
        res.json(hobbies)
    }).catch(e=>{
        res.status(500);
        res.json(e);
    })
}

