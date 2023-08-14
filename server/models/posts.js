"use strict";
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define(
    "posts",
    {
      PostId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      PostTitle: DataTypes.STRING,
      PostBody: DataTypes.STRING,
      UserId: {
        type: DataTypes.INTEGER,
        model: "users",
        key: "UserId"
      },
      Deleted: { type: DataTypes.BOOLEAN, defaultValue: false }
    },
    {}
  );
  posts.associate = function(models) {
    // associations can be defined here
  };
  return posts;
};


// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class posts extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   posts.init({
//     PostId: {
//       type: DataTypes.INTEGER, 
//       autoIncrement: true,
//       primaryKey: true,
//       allowNull: false
//       },
//       UserId: {
//         type: DataTypes.INTEGER, 
//         key: "UserId",
//         model: "users"
//         },
//     PostTitle: DataTypes.STRING,
//     PostBody: DataTypes.STRING,
//     Deleted: { 
//       type: DataTypes.BOOLEAN, 
//       defaultValue: false
//     }
//   }, {
//     sequelize,
//     modelName: 'posts',
//   });
//   return posts;
// };