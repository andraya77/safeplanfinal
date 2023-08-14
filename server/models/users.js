"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      FirstName: DataTypes.STRING,
      LastName: DataTypes.STRING,
      Email: { type: DataTypes.STRING, unique: true },
      Username: { type: DataTypes.STRING, unique: true },
      Password: DataTypes.STRING,
      Admin: { type: DataTypes.BOOLEAN, defaultValue: false },
      Deleted: { type: DataTypes.BOOLEAN, defaultValue: false }
    },
    {}
  );
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};


// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class users extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   users.init({
//     UserId: {
//       type: DataTypes.INTEGER, 
//       autoIncrement: true,
//       primaryKey: true,
//       allowNull: false
//       },
//     FirstName: DataTypes.STRING,
//     LastName: DataTypes.STRING,
//     Username: {
//       type: DataTypes.STRING,
//       unique: true
//     },
//     Password: DataTypes.STRING,
//     Email: {
//       type: DataTypes.STRING,
//       unique: true
//     },
//     Admin: {
//       type: DataTypes.BOOLEAN,
//       default: false,
//     }, 
//     Deleted: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false
//     }
//   }, {
//     sequelize,
//     modelName: 'users',
//   });
 
//   // do I need this code from L10-AK?
//   users.associate = function(models) {
//     // associations can be defined here
//   };

//   return users;
// };