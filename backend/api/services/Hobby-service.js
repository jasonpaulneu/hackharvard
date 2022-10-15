import Hobby from '../models/Hobby.js';

export const createHobby = async (hobby) =>{
    const newHobby = await Hobby.create(hobby);
    return newHobby;
}

export const updateHobby = async (id, update) =>{
    const hobby = await Hobby.findByPk(id);
    if(hobby === null){
        throw new Error('No hobby found with that id');
    }
    const updatedHobby = await hobby.update(update);
    return updatedHobby;
}

export const deleteHobby = async (id) =>{
    const hobby = await Hobby.findByPk(id);
    if(hobby === null){
        throw new Error('No hobby found with that id');
    }
    const count = await Hobby.destroy({
        where:{
            id
        }
    });
    return count;
}

export const getHobby = async (id) =>{
    const hobby = await Hobby.findByPk(id);
    if(hobby === null){
        throw new Error('No hobby found with that id');
    }
    return hobby;
}

export const fetchHobbiesForUser = async (userId) =>{
    const hobbies = await Hobby.findAll({
        where:{
            userId
        }
    })
    return hobbies;
}