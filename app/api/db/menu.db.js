import Sequelize from 'sequelize';
import db from '../config/dbConnect';

const Menu = db.define('menutbl', {
  name: {
    type: Sequelize.STRING,
  },
});

export default Menu;
