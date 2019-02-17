import menuDb from "../db/menu.db";

class MenuController {
  //   add a menu
  addMenu(req, res) {
    if (!req.body.name) {
      return res.status(404).send({
        success: false,
        message: "menu name required"
      });
    }

    const menu = {
      id: menuDb.length + 1,
      name: req.body.name,
      date: Date.now()
    };
    menuDb.push(menu);

    return res.status(200).send({
      success: true,
      message: "menu added successfully"
      // menu: menuDb[menuDb.length - 1]
    });
  }
}

const menuController = new MenuController();

export default menuController;
