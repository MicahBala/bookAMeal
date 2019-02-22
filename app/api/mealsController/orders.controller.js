import Joi from 'joi';
import ids from 'short-id';
import orderDb from '../db/order.db';

class OrderController {
  // get all orders
  getAllOrders(req, res) {
    res.status(200).send({
      success: true,
      message: 'orders retrieved successfully',
      orders: orderDb,
    });
  }

  // place an order
  placeOrder(req, res) {
    const schema = {
      mealName: Joi.string().required(),
    };

    const order = Joi.validate(req.body, schema);

    if (order.error) {
      return res.status(404).send(order.error.message);
    }

    const orderToAdd = {
      id: ids.generate(),
      mealName: req.body.mealName,
      date: Date.now(),
    };

    orderDb.push(orderToAdd);

    return res.status(200).send({
      success: true,
      message: 'you have successfully placed an order',
    });
  }

  //   modify an existing order
  modifyOrder(req, res) {
    const orderToUpdate = orderDb.find(
      updOrder => updOrder.id === parseInt(req.params.id, 10),
    );

    if (!orderToUpdate) {
      return res.status(404).send({
        success: false,
        message: 'order not found',
      });
    }

    const schema = {
      mealName: Joi.string().required(),
    };

    const result = Joi.validate(req.body, schema);

    if (result.error) {
      return res.status(404).send('order not found');
    }

    orderToUpdate.mealName = req.body.mealName || orderToUpdate.mealName;

    return res.status(200).send({
      success: true,
      message: 'order updated successfully',
    });
  }
}

const orderController = new OrderController();

export default orderController;
