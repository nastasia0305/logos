const date = new Date();

const createdAt = date;
const updatedAt = date;

module.exports = {
  async up(queryInterface, Sequelize) {
    const news = [];
    for (let index = 0; index < 10; index += 1) {
      news.push({
        title: `Заголовок новости №${index}`,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

        createdAt,
        updatedAt,
      });
    }

    await queryInterface.bulkInsert('News', news, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('News', null, {});
  },
};
