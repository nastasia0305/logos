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
    static associate(models) {
      // define association here
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
