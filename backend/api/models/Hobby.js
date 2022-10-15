import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const columns = {
    hobby: { type: DataTypes.STRING, allowNull: false },
    id : {type : DataTypes.INTEGER,autoIncrement:true,primaryKey:true}
};

const Hobby = sequelize.define('Hobby',columns);

export default Hobby;