module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LawyerCases', {
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
      case_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Cases',
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
    await queryInterface.dropTable('LawyerCases');
  }
};
