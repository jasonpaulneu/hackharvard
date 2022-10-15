import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const columns = {
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    bio: {type: DataTypes.STRING(500), allowNull:false},
    profile_photo_url: {type: DataTypes.STRING, allowNull:true},
    id : {type : DataTypes.INTEGER,autoIncrement:true,primaryKey:true}
};

const User = sequelize.define('User',columns);

export default User;