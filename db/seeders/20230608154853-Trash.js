'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Trashes',
      [
        {
          medId: 1,
          userId: 1,

        },
        {
          medId: 2,
          userId: 1,

        },
        {
          medId: 3,
          userId: 1,

        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Trashes', null, {});
  },
};
