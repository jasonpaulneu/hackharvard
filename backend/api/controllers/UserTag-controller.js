import * as UserTagServiceService from '../services/UserTag-service.js';

export const createUserTag = (req,res) =>{
       const payload = req.body;
       UserTagServiceService.createUserTag(payload).then((tag)=>{
        res.status(201);
        res.json(tag);
       }).catch(e=>{
        res.status(500);
        res.json(e);
       }
        )
    };

export const deleteUserTag = (req,res) =>{
    const id = req.params.id;
    UserTagServiceService.deleteUserTag(id).then((result)=>{
        res.sendStatus(204);
    }).catch(e=>{
        res.status(500);
        res.json(e);
    })
}

export const fetchUserTagsForUser = (req,res) =>{
    const userId = req.query.userId;
    UserTagServiceService.fetchUserTagsForUser(userId).then((tags)=>{
        res.status(200);
        res.json(tags)
    }).catch(e=>{
        res.status(500);
        res.json(e);
    })
}

