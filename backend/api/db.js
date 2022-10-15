import mysql from 'mysql2/promise';
import User from './models/User.js';
import Hobby from './models/Hobby.js';
import * as dotenv from 'dotenv'

dotenv.config();

const dbconfig = {
    host: process.env.MYSQL_HOST,
    port: 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}

const dbInitialize = async () =>{
 const {
        host,
        port,
        user,
        password,
        database
    } = dbconfig;

    const connection = await mysql.createConnection({
        host,
        port,
        user,
        password
    });

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
    console.log("creating users table");
    await User.sync({ alter: true });
    console.log("created users table");

    await User.sync({alter:true});
    User.hasMany(Hobby,{
        foreignKey:{
            name: 'userId',
            allowNull: false
        }
    });

    await Hobby.sync({alter:true});
}

export {dbInitialize};

