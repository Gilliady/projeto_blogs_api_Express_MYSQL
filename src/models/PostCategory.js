module.exports = (sequelize, DataTypes) => {
  const PostCAtegory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: 'BlogPost',
        key: 'id',
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: 'Category',
        key: 'id',
      },
    },
  }, { timestamps: false, tableName: 'posts_categories', underscored: true });
  PostCAtegory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostCAtegory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    Category.belongsToMany(BlogPost, {
      as: 'blogPosts',
      through: PostCAtegory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return PostCAtegory;
};