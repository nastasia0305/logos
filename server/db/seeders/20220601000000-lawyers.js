const bcrypt = require('bcrypt');

const date = new Date();

const createdAt = date;
const updatedAt = date;

const baseInfo = {
  firstname: 'Иван',
  lastname: 'Иванов',
  fathersname: 'Иванович',
  city: 'Москва',
};

module.exports = {
  async up(queryInterface, Sequelize) {
    const password = await bcrypt.hash('12345678', 10);
    const lawyers = [];
    for (let index = 0; index < 10; index += 1) {
      lawyers.push({
        ...baseInfo,

        email: `test${index}@test.ru`,
        password,

        createdAt,
        updatedAt,
      });
    }

    await queryInterface.bulkInsert('Lawyers', lawyers, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Lawyers', null, {});
  },
};
