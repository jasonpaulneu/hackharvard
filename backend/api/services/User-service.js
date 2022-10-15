import User from '../models/User.js';

export const createUser = async (user) =>{
    const newUser = await User.create(user);
}