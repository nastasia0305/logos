const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class LawyerCase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Lawyer, Case }) {
      // LawyerCase.hasMany(Lawyer, { foreignKey: 'lawyer_id' });
      // LawyerCase.hasMany(Case, { foreignKey: 'case_id' });
    }
  }
  LawyerCase.init({
    lawyer_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Lawyers',
        key: 'id',
      },
    },
    case_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Cases',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'LawyerCase',
  });
  return LawyerCase;
};
