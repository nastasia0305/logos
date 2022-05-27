const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class LawyerService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Lawyer, KindOfService }) {
      // LawyerService.hasMany(Lawyer, { foreignKey: 'lawyer_id' });
      // LawyerService.hasMany(KindOfService, { foreignKey: 'service_id' });
    }
  }
  LawyerService.init({
    lawyer_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Lawyers',
        key: 'id',
      },
    },
    service_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'KindOfServices',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'LawyerService',
  });
  return LawyerService;
};
