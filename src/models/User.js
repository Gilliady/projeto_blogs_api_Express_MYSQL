/**
 * 
 * @param {import('sequelize').sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });
  User.associate = ({ BlogPost }) => {
    User.hasMany(BlogPost, {
      foreignKey: 'userId',
      as: 'BlogPost',
    });
  };
  return User;
}