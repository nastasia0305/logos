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
    static associate({ Client, Lawyer, StatusAnket }) {
      // define association here
      Anketa.belongsTo(Client, { foreignKey: 'client_id' });
      Anketa.belongsTo(Lawyer, { foreignKey: 'lawyer_id' });
      Anketa.belongsToMany(Lawyer, { through: StatusAnket, foreignKey: 'anketa_id', otherKey: 'lawyer_id' });
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
    statusClient: {
      type: DataTypes.TEXT,
    },
    help: {
      type: DataTypes.TEXT,
    },
    case: {
      type: DataTypes.TEXT,
    },
    service: {
      type: DataTypes.TEXT,
    },
    condition: {
      type: DataTypes.TEXT,
      defaultValue: 'отправлено',
    },
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
