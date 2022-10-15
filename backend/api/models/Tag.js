import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const columns = {
    tag: { type: DataTypes.STRING, allowNull: false },
    id : {type : DataTypes.INTEGER,autoIncrement:true,primaryKey:true}
};

const Tag = sequelize.define('Tag',columns);

export default Tag;