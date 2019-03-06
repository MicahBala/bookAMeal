import Joi from 'joi';
import orderDb from '../db/order.db';

class OrderController {
  // get all orders
  getAllOrders(req, res) {
    orderDb.findAll().then((orders) => {
      res.status(200).send({
        success: true,
        message: 'orders were retrieved successfully',
        orders,
      });
    });
  }

  // place an order
  placeOrder(req, res) {
    const schema = {
      name: Joi.string().required(),
    };

    const order = Joi.validate(req.body, schema);

    if (order.error) {
      return res.status(404).send(order.error.message);
    }

    return orderDb.create({ name: req.body.name }).then(myOrder => res.status(200).send({
      success: true,
      message: 'you have successfully placed an order',
      myOrder,
    }));
  }

  //   modify an existing order
  modifyOrder(req, res) {
    orderDb
      .update(
        { name: req.body.name },
        { returning: true, where: { id: req.params.id } },
      )
      .then(([updatedOrder]) => res.status(200).send({
        success: true,
        message: 'order updated successfully',
        updatedOrder,
      }));
  }
}

const orderController = new OrderController();

export default orderController;
