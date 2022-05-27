module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('KindOfHelps', [{
      title: 'разовое сотрудничество',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'регулярное сотрудничество',
      createdAt: new Date(),
      updatedAt: new Date(),

    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('KindOfHelps', null, {});
  },
};
