/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

import request from 'supertest';
import { expect } from 'chai';
import app from '../app';

describe('Test API endpoints', () => {
  describe('Test meals endpoints', () => {
    it('Should get all meals on GET /api/v1/meals', (done) => {
      request(app)
        .get('/api/v1/meals')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('Should add a meal option POST /api/v1/meals', (done) => {
      const mealData = {
        name: 'Bacon',
        description: 'Bacon ipsum dolor amet ribeye.',
        price: 'N400',
      };
      request(app)
        .post('/api/v1/meals')
        .send(mealData)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(() => {
          expect(mealData).to.exist;
          expect(mealData).to.have.property('name');
          expect(mealData).to.have.property('description');
          expect(mealData).to.have.property('price');
          done();
        });
    });

    it('Update a meal option on PUT /api/v1/meals/:id', (done) => {
      const updateData = {
        name: 'Bacon',
        description: 'Bacon ipsum dolor amet ribeye.',
        price: 'N400',
      };
      request(app)
        .put('/api/v1/meals/1')
        .send(updateData)
        .expect(200)
        .end(() => {
          expect(updateData).to.exist;
          expect(updateData).to.have.property('name');
          expect(updateData).to.have.property('description');
          expect(updateData).to.have.property('price');
          done();
        });
    });

    it('Should delete a meal on DELETE /api/v1/meals/:id', (done) => {
      request(app)
        .delete('/api/v1/meals/1')
        .expect(200, done);
    });
  });

  describe('Test menu endpoints', () => {
    it('Should set up menu for the day on POST /api/v1/menu', (done) => {
      const setMenu = {
        name: 'Bacon',
      };
      request(app)
        .post('/api/v1/menu')
        .send(setMenu)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(() => {
          expect(setMenu).to.exist;
          expect(setMenu).to.has.property('name');
          done();
        });
    });

    it('Should get menu for the day on GET /api/v1/menu', (done) => {
      request(app)
        .get('/api/v1/menu')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('Test order endpoints', () => {
    it('Should get all orders  GET /api/v1/order', (done) => {
      request(app)
        .get('/api/v1/order')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('Should modify an order on  PUT /api/v1/order/id', (done) => {
      const orderData = {
        mealName: 'Yam',
      };
      request(app)
        .put('/api/v1/order/1')
        .send(orderData)
        .expect(200)
        .end(() => {
          expect(orderData).to.exist;
          expect(orderData).to.have.property('mealName');
          done();
        });
    });

    it('Should place an order for meal on POST /api/v1/order', (done) => {
      request(app)
        .get('/api/v1/order')
        .expect(200, done);
    });
  });

  describe('Test users endpoint', () => {
    it('Should add a new user at POST /auth/signup', (done) => {
      const userData = {
        firstName: 'Micah',
        lastName: 'Bala',
        userName: 'micahbala',
        password: 'micahbala',
        isAdmin: false,
      };

      request(app)
        .post('/auth/signup')
        .send(userData)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(() => {
          expect(userData).to.exist;
          expect(userData).to.have.property('firstName');
          expect(userData).to.have.property('lastName');
          expect(userData).to.have.property('userName');
          expect(userData).to.have.property('password');
          expect(userData).to.have.property('isAdmin');
          done();
        });
    });

    it('Should sigin a user at POST /auth/login', (done) => {
      const loginData = {
        userName: 'micahbala',
        password: 'micahbala',
      };
      request(app)
        .post('/auth/login')
        .send(loginData)
        .expect(200)
        .end(() => {
          expect(loginData).to.exist;
          expect(loginData).to.has.property('userName');
          expect(loginData).to.has.property('password');
          done();
        });
    });
  });
});
