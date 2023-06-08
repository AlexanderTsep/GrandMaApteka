const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Trash extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Trash.init(
    {
      medId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Trash',
    },
  );
  return Trash;
};
