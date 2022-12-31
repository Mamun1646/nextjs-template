const { Sequelize, DataTypes } = require('sequelize');
import Connection from './../../connection';

const User = Connection.define('User', {
  // Model attributes are defined here
  id:{
    type: DataTypes.NUMBER,
    autoIncrement: true,
    primaryKey:true
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  email : {
    type:DataTypes.STRING
  },
  
},{
    timestamps: false
});

// `sequelize.define` also returns the model
console.log(User === Connection.models.User);
export default User;