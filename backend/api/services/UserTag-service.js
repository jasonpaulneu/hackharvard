import UserTag from '../models/UserTag.js';

export const createUserTag = async (userTag) => {
    const newUserTag = await UserTag.create(userTag);
    return newUserTag;
}

export const deleteUserTag = async (id) => {
    const userTag = await UserTag.findByPk(id);
    if (userTag === null) {
        throw new Error('No userTag found with that id');
    }
    const count = await UserTag.destroy({
        where: {
            id
        }
    });
    return count;
}

export const fetchUserTagsForUser = async (userId) => {
    const userTags = await UserTag.findAll({
        where: {
            userId
        }
    })
    return userTags;
}