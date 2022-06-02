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
      isLawyer: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      help: {
        type: Sequelize.TEXT,
      },
      case: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        defaultValue: [],
      },
      service: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        defaultValue: [],
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
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
