import Joi from "joi";
import models from "../models";

class OrderController {
  // get all orders
  getAllOrders(req, res) {
    models.Order.findAll().then(orders => {
      res.status(200).send({
        success: true,
        message: "orders were retrieved successfully",
        orders
      });
    });
  }

  // place an order
  placeOrder(req, res) {
    const schema = {
      order_name: Joi.string().required()
    };

    const order = Joi.validate(req.body, schema);

    if (order.error) {
      return res.status(404).send(order.error.message);
    }

    return models.Order.create({ order_name: req.body.order_name }).then(
      myOrder =>
        res.status(200).send({
          success: true,
          message: "you have successfully placed an order",
          myOrder
        })
    );
  }

  //   modify an existing order
  modifyOrder(req, res) {
    models.Order.findAll().then(orderFound => {
      models.Order.update(
        { order_name: req.body.order_name || orderFound.order_name },
        { returning: true, where: { id: req.params.id } }
      ).then(([updatedOrder]) =>
        res.status(200).send({
          success: true,
          message: "order updated successfully",
          updatedOrder
        })
      );
    });
  }
}

const orderController = new OrderController();

export default orderController;
