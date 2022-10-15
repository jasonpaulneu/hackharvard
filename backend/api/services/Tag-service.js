import Tag from '../models/Tag.js';

export const createTag = async (tag) =>{
    const newTag = await Tag.create(tag);
    return newTag;
}

export const updateTag = async (id, update) =>{
    const tag = await Tag.findByPk(id);
    if(tag === null){
        throw new Error('No tag found with that id');
    }
    const updatedTag = await tag.update(update);
    return updatedTag;
}

export const deleteTag = async (id) =>{
    const tag = await Tag.findByPk(id);
    if(tag === null){
        throw new Error('No tag found with that id');
    }
    const count = await Tag.destroy({
        where:{
            id
        }
    });
    return count;
}

export const getTag = async (id) =>{
    const tag = await Tag.findByPk(id);
    if(tag === null){
        throw new Error('No tag found with that id');
    }
    return tag;
}

export const getTags = async () =>{
    const tags = await Tag.findAll()
    return tags;
}