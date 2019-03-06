import Sequelize from 'sequelize';
import db from '../config/dbConnect';

const Order = db.define('ordertbls', {
  name: {
    type: Sequelize.STRING,
  },
});

export default Order;
