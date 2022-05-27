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

    await queryInterface.bulkInsert('KindOfServices', [{
      title: 'иск',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'претензия',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'спор',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'договор',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'ходатайство',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'консультация',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'жалоба',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'оформление документов',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'сопровождение сделки',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'выход в суд',
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
    await queryInterface.bulkDelete('KindOfServices', null, {});
  },
};
