const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Anketa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Anketa.init({
    client_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Clients',
        key: 'id',
      },
    },
    isWithInfo: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    statusClient: DataTypes.TEXT,
    help_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'KindOfHelps',
        key: 'id',
      },
    },
    case_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Cases',
        key: 'id',
      },
    },

    service_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'KindOfServices',
        key: 'id',
      },
    },
    condition: DataTypes.TEXT,
    lawyer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Lawyers',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Anketa',
  });
  return Anketa;
};
