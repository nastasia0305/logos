const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Lawyer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Request, Support, StatusAnket }) {
      // define association here
      Lawyer.hasMany(Request, { foreignKey: 'lawyer_id' });
      Lawyer.hasMany(Support, { foreignKey: 'lawyer_id' });
      Lawyer.belongsToMany(Request, { through: StatusAnket, foreignKey: 'lawyer_id' });
    }
  }
  Lawyer.init({
    firstname: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    lastname: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    fathersname: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    email: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    city: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    isLawyer: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    help: {
      type: DataTypes.TEXT,
    },
    case: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
    service: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },

    educationLevel: {
      type: DataTypes.TEXT,
    },
    experience: {
      type: DataTypes.INTEGER,
    },
    certificate: {
      type: DataTypes.TEXT,
    },
    diploma: {
      type: DataTypes.TEXT,
    },
    employeBook: {
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 5,
    },
    isValidate: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'Lawyer',
  });
  return Lawyer;
};
