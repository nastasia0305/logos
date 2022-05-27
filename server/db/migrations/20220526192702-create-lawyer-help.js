module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LawyerHelps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lawyer_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Lawyers',
          key: 'id',
        },
      },
      help_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'KindOfHelps',
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
    await queryInterface.dropTable('LawyerHelps');
  },
};
