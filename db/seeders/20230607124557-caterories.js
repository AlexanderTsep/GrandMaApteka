/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Антибиотики',
        },
        {
          name: 'Противокашлевые средства',
        },
        {
          name: 'Витамины',
        },
        {
          name: 'Антидепрессанты',
        },
        {
          name: 'Гормоны',
        },
        {
          name: 'Диуретики',
        },
        {
          name: 'Слабительное',
        },
        {
          name: 'Суспензия',
        },
        {
          name: 'Капли',
        },
        {
          name: 'Контрацепция',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
