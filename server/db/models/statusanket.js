const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class StatusAnket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StatusAnket.init({
    anketa_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Requests',
        key: 'id',
      },
    },
    lawyer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Lawyers',
        key: 'id',
      },
    },
    status: {
      allowNull: false,
      type: DataTypes.TEXT,
      defaultValue: 'new',
    },
  }, {
    sequelize,
    modelName: 'StatusAnket',
  });
  return StatusAnket;
};
