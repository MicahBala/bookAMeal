import Joi from "joi";
import usersDb from "../db/users.db";

class UsersController {
  // add new user
  addNewUser(req, res) {
    const schema = {
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      password: Joi.string().required(),
      isAdmin: Joi.boolean()
    };

    const user = Joi.validate(req.body, schema);

    if (user.error) {
      return res.status(404).send(user.error.message);
    }

    const userToAdd = {
      id: usersDb.length + 1,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      isAdmin: false
    };

    usersDb.push(userToAdd);

    return res.status(200).send({
      success: true,
      message: "new user added successfully",
      newUser: usersDb[usersDb.length - 1]
    });
  }
}

const usersController = new UsersController();

export default usersController;
