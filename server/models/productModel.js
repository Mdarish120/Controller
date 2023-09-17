

const ProductModel = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Product;
  };
  
  export default ProductModel;
  