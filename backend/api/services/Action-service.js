import Action from '../models/Action.js';

//Create Action (like or dislike) for a user
export const createAction = async (action) =>{
    const newAction = await Action.create(action);
    return newAction;
}

//get actions taken by user for a flight and departure
export const fetchHistoricActions = async(by_userId,filter) =>{
    const actions = await Action.findAll({
        where:{
            by:by_userId,
            ...filter
        }
    })

    return actions;
}

export const fetchLikesForUser = async (for_userId,filter) =>{
    const actions = await Action.findAll({
        where:{
            for:for_userId,
            ...filter
        }
    })

    return actions;
}