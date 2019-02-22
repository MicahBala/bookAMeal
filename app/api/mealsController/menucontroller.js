import Joi from 'joi';
import ids from 'short-id';
import menuDb from '../db/menu.db';

class MenuController {
  // get all menu
  getAllMenu(req, res) {
    res.status(200).send({
      success: true,
      message: 'menu retrieved successfully',
      meals: menuDb,
    });
  }

  //   add a menu
  addMenu(req, res) {
    const schema = {
      name: Joi.string().required(),
    };

    const menu = Joi.validate(req.body, schema);

    if (menu.error) {
      return res.status(404).send(menu.error.message);
    }

    const menuToAdd = {
      id: ids.generate(),
      name: req.body.name,
      date: Date.now(),
    };
    menuDb.push(menuToAdd);

    return res.status(200).send({
      success: true,
      message: 'menu added successfully',
    });
  }
}

const menuController = new MenuController();

export default menuController;
