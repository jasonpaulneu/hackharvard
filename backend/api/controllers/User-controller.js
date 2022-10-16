import * as UserService from '../services/User-service.js';

export const createUser = (req,res) =>{
       const payload = req.body;
       UserService.createUser(payload).then((user)=>{
        res.status(200);
        res.json(user);
       }).catch(e=>{
        res.status(500);
        res.json(e);
       }
        )
    };

export const getUserByEmail = (req,res) =>{
        const email = req.query.email;
        UserService.getUserByEmail(email).then((user)=>{
            res.status(200);
            res.json(user)
        }).catch(e=>{
            res.status(500);
            res.json(e);
        })
    }