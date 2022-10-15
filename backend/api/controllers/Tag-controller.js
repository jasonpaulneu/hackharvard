import * as TagService from '../services/Tag-service.js';

export const createTag = (req,res) =>{
       const payload = req.body;
       TagService.createTag(payload).then((tag)=>{
        res.status(201);
        res.json(tag);
       }).catch(e=>{
        res.status(500);
        res.json(e);
       }
        )
    };

export const updateTag = (req,res)=>{
    const id = req.params.id;
    const payload = req.body;
    TagService.updateTag(id,payload).then((tag)=>{
        res.status(200);
        res.json(tag);
    }).catch(e=>{
        res.status(500);
        res.json(e);
    }
    )
}

export const deleteTag = (req,res) =>{
    const id = req.params.id;
    TagService.deleteTag(id).then((result)=>{
        res.sendStatus(204);
    }).catch(e=>{
        res.status(500);
        res.json(e);
    })
}

export const getTag = (req,res) =>{
    const id = req.params.id;
    TagService.getTag(id).then((tag)=>{
        res.status(200);
        res.json(tag)
    }).catch(e=>{
        res.status(500);
        res.json(e);
    })
}

export const fetchTags = (req,res) =>{
    TagService.getTags().then((tags)=>{
        res.status(200);
        res.json(tags)
    }).catch(e=>{
        res.status(500);
        res.json(e);
    })
}

