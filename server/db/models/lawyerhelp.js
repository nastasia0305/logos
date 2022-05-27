const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class LawyerHelp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Lawyer, KindOfHelps }) {
      LawyerHelp.belongsTo(Lawyer, { foreignKey: 'lawyer_id' });
      LawyerHelp.belongsTo(KindOfHelps, { foreignKey: 'help_id' });
    }
  }
  LawyerHelp.init({
    lawyer_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Lawyers',
        key: 'id',
      },
    },
    help_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'KindOfHelps',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'LawyerHelp',
  });
  return LawyerHelp;
};
