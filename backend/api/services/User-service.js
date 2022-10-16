import User from '../models/User.js';

export const createUser = async (user) =>{
    const newUser = await User.create(user);
    return newUser;
}

export const getUserByEmail = async (email) =>{
    const user = await User.findOne({
        where:{
            email
        }
    });
    if(user === null){
        throw new Error('No hobby found with that id');
    }
    return user; 
}