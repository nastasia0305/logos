const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Support extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Lawyer, Client }) {
      // define association here
      Support.belongsTo(Lawyer, { foreignKey: 'lawyer_id' });
      Support.belongsTo(Client, { foreignKey: 'client_id' });
    }
  }
  Support.init({
    question: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    description: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    status: {
      allowNull: false,
      type: DataTypes.TEXT,
      defaultValue: 'новая',
    },
    lawyer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Lawyers',
        key: 'id',
      },
    },
    client_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Clients',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Support',
  });
  return Support;
};
