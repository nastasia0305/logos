const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class KindOfService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ LawyerService, Anketa }) {
      KindOfService.belongsTo(LawyerService, { foreignKey: 'service_id' });
      KindOfService.belongsTo(Anketa, { foreignKey: 'service_id' });
    }
  }
  KindOfService.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'KindOfService',
  });
  return KindOfService;
};
