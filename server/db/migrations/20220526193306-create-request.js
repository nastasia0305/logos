module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Requests', {
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
      help: {
        type: Sequelize.TEXT,
      },
      case: {
        type: Sequelize.TEXT,
      },
      clientName: {
        allowNull: false,
        type: Sequelize.TEXT,

      },
      lawyerName: {
        type: Sequelize.TEXT,

      },
      service: {
        type: Sequelize.TEXT,
      },
      condition: {
        type: Sequelize.TEXT,
        defaultValue: 'отправлено',
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
    await queryInterface.dropTable('Requests');
  },
};
