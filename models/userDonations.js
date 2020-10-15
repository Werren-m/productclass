'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDonations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // UserDonations.belongsTo('models.users')
      // UserDonations.belongsTo('models.campaigns')

    }
  };
  UserDonations.init({
    User_id: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "Please login"
        }
      }
    },
    Campaign_id:  {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "Please select campaign you want to donate"
        }
      }
    },
    amount: {
      type: DataTypes.FLOAT,
      validate: {
        notEmpty: {
          msg: "Please fill amount you want to donate"
        }
      }
    },
    date: {
      type : DataTypes.DATE,
      dafault: Date.now()
    },
    share: {
      type: DataTypes.BOOLEAN, 
      default : true,
      validate: {
        notEmpty: {
          msg: "Please select one option"
        }
      }
    },
    comment:{
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          msg: "Please select one option"
        }
      }
    }
  }, {    
    sequelize,
    modelName: 'UserDonations',
  });
  return UserDonations;
};