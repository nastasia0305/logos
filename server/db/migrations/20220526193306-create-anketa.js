module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Anketas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      client_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Clients',
          key: 'id',
        },
      },
      isWithInfo: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      statusClient: {
        type: Sequelize.TEXT,
      },
      help_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'KindOfHelps',
          key: 'id',
        },
      },
      case_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cases',
          key: 'id',
        },
      },
      service_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'KindOfServices',
          key: 'id',
        },
      },
      condition: {
        type: Sequelize.TEXT,
      },
      lawyer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Lawyers',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Anketas');
  },
};
