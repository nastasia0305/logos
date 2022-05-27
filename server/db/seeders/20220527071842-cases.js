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
    await queryInterface.bulkInsert('Cases', [{
      title: 'уголовное',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'арбитражное',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'налоговое',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'бюджетное',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'семейное',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'жилищное',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'трудовое',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'договорное',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'защита прав потребителей',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'земельное',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'экологическое',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'административное',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'гос. закупки',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'банкротство',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'бухгалтерия',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'другое',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Cases', null, {});
  },
};
