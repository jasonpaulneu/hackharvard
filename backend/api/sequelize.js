import Sequelize from 'sequelize';

 const sequelize = new Sequelize('floak', 'root', 'heXwij-8devwu-fosqet', {
    host: '34.66.148.107',
    dialect: 'mysql' 
  });

  export default sequelize;