module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Lawyers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstname: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      lastname: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      fathersname: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      email: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      password: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      city: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      educationLevel: {
        type: Sequelize.TEXT,
      },
      experience: {
        type: Sequelize.INTEGER,
      },
      certificate: {
        type: Sequelize.TEXT,
      },
      diploma: {
        type: Sequelize.TEXT,
      },
      employeBook: {
        type: Sequelize.TEXT,
      },
      rating: {
        type: Sequelize.INTEGER,
        defaultValue: 5,
      },
      isValidate: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('Lawyers');
  },
};
