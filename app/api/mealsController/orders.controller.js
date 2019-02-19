import orderDb from "../db/order.db";
import Joi from "joi";

class OrderController {
  //place an order
  placeOrder(req, res) {
    const schema = {
      mealName: Joi.string().required()
    };

    const order = Joi.validate(req.body, schema);

    if (order.error) {
      res.status(404).send(order.error.message);
      return;
    }

    const orderToAdd = {
      id: orderDb.length + 1,
      mealName: req.body.mealName,
      date: Date.now()
    };

    orderDb.push(orderToAdd);

    return res.status(200).send({
      success: true,
      message: "you have successfully placed an order"
    });
  }

  //   modify an existing order
  modifyOrder(req, res) {
    const orderToUpdate = orderDb.find(
      updOrder => updOrder.id === parseInt(req.params.id)
    );

    if (!orderToUpdate)
      return res.status(404).send({
        success: false,
        message: "order not found"
      });

    const schema = {
      mealName: Joi.string().required()
    };

    const result = Joi.validate(req.body, schema);

    if (result.error) {
      return res.status(404).send("order not found");
    }

    orderToUpdate.mealName = req.body.mealName || orderToUpdate.mealName;

    return res.status(200).send({
      success: true,
      message: "order updated successfully"
    });
  }
}

const orderController = new OrderController();

export default orderController;
