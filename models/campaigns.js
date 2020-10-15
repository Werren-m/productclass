'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Campaigns extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Campaigns.belongsTo(models.Category);
    }
  };
  Campaigns.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Title cannot be empty!"
        },
        len: {
          args: [15, 255],
          msg: 'Please provide field within 15 to 255 characters.'
        }
      }
    },
    goal: {
      type: DataTypes.FLOAT,
      validate: {
        notEmpty: {
          msg: "Please input your goal fund value"
        },
        isFloat: {
          msg: "Please input valid values!"
        }
      }
    },
    raised: DataTypes.FLOAT,
    header_img: DataTypes.TEXT,
    story: {
      type: DataTypes.TEXT,
      validate: {
        len: {
          args: [30, 30000],
          msg: "Please input minimum 30 character!"
        }
      }
    },
    due_date: DataTypes.DATE,  
    due_date: {
      type: DataTypes.DATE,
      validate: {
        isDate: {
          msg: "Please input a valid date!"
        }
      }
    },
    UserId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
    bankAccount: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "Please enter a valid bank account"
        }
      }
    },

  }, {
    sequelize,
    modelName: 'Campaigns',
  });
  return Campaigns;
};