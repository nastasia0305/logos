const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Chat.init(
    {
      lawyer_id: {
        allowNull: false,
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
      lawyer_messages: {
        type: DataTypes.TEXT,
      },
      client_messages: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Chat',
    }
  );
  return Chat;
};
