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
      this.belongsToMany(models.Trash, {
        through: 'MedTrash',
        foreignKey: 'medId',
      });
    }
  }
  Medecine.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      img: DataTypes.STRING,
      price: DataTypes.INTEGER,
      catId: DataTypes.INTEGER,
      availability: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Medecine',
    },
  );
  return Medecine;
};
