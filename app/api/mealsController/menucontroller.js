import Joi from "joi";
import menuDb from "../db/menu.db";

class MenuController {
  // get all menu
  getAllMenu(req, res) {
    menuDb
      .findAll()
      .then(menu => {
        res.status(200).send({
          success: true,
          message: "menu retrieved successfully",
          menu
        });
      })
      .catch(err => console.log(err));
  }

  //   add a menu
  addMenu(req, res) {
    const schema = {
      name: Joi.string().required()
    };

    const menu = Joi.validate(req.body, schema);

    if (menu.error) {
      return res.status(404).send(menu.error.message);
    }

    menuDb.create({ name: req.body.name }).then(menu => {
      return res.status(200).send({
        success: true,
        message: "menu added successfully",
        menu
      });
    });
  }
}

const menuController = new MenuController();

export default menuController;
