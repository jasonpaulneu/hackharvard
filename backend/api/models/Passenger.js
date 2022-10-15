import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const columns = {
    flight_number: { type: DataTypes.STRING, allowNull: false },
    departure_dateTime: {type: DataTypes.DATE,allowNull:false},
    id : {type : DataTypes.INTEGER,autoIncrement:true,primaryKey:true}
};

const Passenger = sequelize.define('Passenger',columns);

export default Passenger;