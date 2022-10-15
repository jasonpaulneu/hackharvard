import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const columns = {
    id : {type : DataTypes.INTEGER,autoIncrement:true,primaryKey:true}
};

const UserTag = sequelize.define('UserTag',columns);

export default UserTag;