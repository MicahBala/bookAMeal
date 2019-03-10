import Joi from "joi";
import models from "../models";

class MenuController {
  // get all menu
  getAllMenu(req, res) {
    models.Menu.findAll().then(menu => {
      res.status(200).send({
        success: true,
        message: "menu retrieved successfully",
        menu
      });
    });
  }

  //   add a menu
  addMenu(req, res) {
    const schema = {
      menu_name: Joi.string().required()
    };

    const menu = Joi.validate(req.body, schema);

    if (menu.error) {
      return res.status(404).send(menu.error.message);
    }

    return models.Menu.create({ menu_name: req.body.menu_name }).then(myMenu =>
      res.status(200).send({
        success: true,
        message: "menu added successfully",
        myMenu
      })
    );
  }
}

const menuController = new MenuController();

export default menuController;
