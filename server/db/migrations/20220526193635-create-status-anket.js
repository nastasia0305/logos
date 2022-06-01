module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StatusAnkets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      anketa_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Requests',
          key: 'id',
        },
      },
      lawyer_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Lawyers',
          key: 'id',
        },
      },
      status: {
        allowNull: false,
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('StatusAnkets');
  },
};
