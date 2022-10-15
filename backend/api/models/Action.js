import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const columns = {
    like: { type: DataTypes.BOOLEAN, allowNull: false },
    flight_number: {type: DataTypes.STRING, allowNull:false},
    departure_dateTime:{type: DataTypes.DATE, allowNull:false},
    id : {type : DataTypes.INTEGER,autoIncrement:true,primaryKey:true}
};

const Action = sequelize.define('Action',columns);

export default Action;