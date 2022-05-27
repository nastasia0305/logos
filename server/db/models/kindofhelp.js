const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class KindOfHelp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ LawyerHelp, Anketa }) {
      KindOfHelp.belongsTo(LawyerHelp, { foreignKey: 'help_id' });
      KindOfHelp.belongsTo(Anketa, { foreignKey: 'help_id' });
    }
  }
  KindOfHelp.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'KindOfHelp',
  });
  return KindOfHelp;
};
