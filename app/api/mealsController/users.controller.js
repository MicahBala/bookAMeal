import Joi from "joi";
import ids from "short-id";

class UsersController {
  // add new user
  addNewUser(req, res) {
    const schema = {
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      userName: Joi.string().required(),
      password: Joi.string().required(),
      isAdmin: Joi.boolean()
    };

    const user = Joi.validate(req.body, schema);

    if (user.error) {
      return res.status(404).send(user.error.message);
    }

    const userToAdd = {
      id: ids.generate(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
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

  //  user login
  loginUser(req, res) {
    const schema = {
      userName: Joi.string().required(),
      password: Joi.string().required()
    };

    const user = Joi.validate(req.body, schema);

    if (user.error) {
      return res.status(404).send(user.error.message);
    }

    const loginUser = usersDb.find(
      userFound =>
        userFound.userName === req.body.userName &&
        user.passowrd === req.body.passowrd
    );

    if (!loginUser) {
      return res.status(404).send({
        success: false,
        message: "Sorry you are not registered!"
      });
    }
    return res.status(200).send({
      success: true,
      message: `Welcome ${loginUser.lastName}!`
    });
  }
}

const usersController = new UsersController();

export default usersController;
