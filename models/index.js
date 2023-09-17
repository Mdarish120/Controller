import * as dbConfig from "../utils/db.js";
import ProductModel from "./productModel.js";
import UserModel from "./userModel.js";



import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,

  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,


    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);


sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.userInfo = UserModel(sequelize, DataTypes);

db.productInfo = ProductModel(sequelize, DataTypes);


db.userInfo.hasMany(db.productInfo, {
  foreignKey: 'userId',
  onDelete: 'CASCADE', // Optional: Set the behavior for deleting a user
});

// product.js (add this at the end)
db.productInfo.belongsTo(db.userInfo, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})

export default db;