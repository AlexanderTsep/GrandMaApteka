const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Medecine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Category, { foreignKey: 'catId' });
      this.belongsTo(models.Trash, {foreignKey: 'medId'})
    }
  }
  Medecine.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      img: DataTypes.STRING,
      price: DataTypes.INTEGER,
      catId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Medecine',
    },
  );
  return Medecine;
};
